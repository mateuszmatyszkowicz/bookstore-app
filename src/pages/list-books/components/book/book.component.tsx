import React from "react";
import { Link } from "react-router-dom";
import { Book as BookType } from "../../../../types";

type BookProps = {
  book: BookType;
  onClick: (book: BookType) => void;
};

const Book = ({ book, onClick }: BookProps) => {
  const handleClick = () => onClick(book);
  const { author, bookId, price, title } = book;
  return (
    <div>
      <input type={"checkbox"} onChange={handleClick} />
      <div>{`BookdId: ${bookId}, Title: ${title}, Author: ${author}, Price: ${price}`}</div>
      <Link to={{ pathname: `/book/${bookId}/edit` }} children={"edit"} />
    </div>
  );
};

export default Book;
