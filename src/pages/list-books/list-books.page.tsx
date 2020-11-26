import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { displayAsCurrency } from "../../core/utils/currency";
import { Book as BookType, useBooksQuery } from "../../types";
import Book from "./components/book/book.component";

const ListBooksPage = () => {
  const { data, loading, error } = useBooksQuery();
  const [selected, setSelected] = useState<Record<number, BookType>>({});
  const onBookClick = useCallback(
    (book: BookType) => {
      if (!!selected[book.bookId]) {
        const { [book.bookId]: bookId, ...rest } = selected;
        setSelected(rest);
      } else {
        setSelected({ ...selected, [book.bookId]: book });
      }
    },
    [selected]
  );

  if (loading) {
    return <div>Fetching books</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const currentPrice = Object.values(selected).reduce(
    (prev, curr) => prev + curr.price,
    0
  );
  const selectedCount = Object.values(selected).length;
  return (
    <>
      <h1>Book store</h1>
      <div>
        selected ({selectedCount}), total price:{" "}
        {displayAsCurrency(currentPrice)}
      </div>
      <div>
        {data?.books?.map((book) =>
          book ? (
            <Book book={book} onClick={onBookClick} key={book.bookId} />
          ) : null
        )}
      </div>
      <div>
        <Link to={"/create"} children={"Create"} />
      </div>
    </>
  );
};

export default ListBooksPage;
