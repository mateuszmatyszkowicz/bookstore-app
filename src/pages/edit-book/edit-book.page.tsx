import React, { useCallback, useEffect, useState } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import BookForm, {
  BookFormValues,
} from "../../components/book-form/book-form.component";
import { formatPrice } from "../../core/utils/currency";
import { useBookQuery, useEditBookMutation } from "../../types";

type EditBookPageParams = {
  id: string;
};

const EditBookPage = () => {
  const { id } = useParams<EditBookPageParams>();
  const [pageNotFound, setPageNotFound] = useState(false);
  const bookId = parseInt(id); // can wrongly return book ex. "1a123" -> "1"
  const { data, loading: queryLoading, error: queryError } = useBookQuery({
    variables: { bookId },
  });
  const [
    editBook,
    { data: updatedBook, loading: mutationLoading, error: mutationError },
  ] = useEditBookMutation();

  const handleSubmit = useCallback(
    (book: BookFormValues) => {
      editBook({
        variables: {
          bookId,
          ...book,
          price: formatPrice(book.price),
        },
      });
    },
    [bookId, editBook]
  );

  useEffect(() => {
    if (id) {
      if (id !== bookId.toString()) {
        setPageNotFound(true);
      }
    }
  }, [id, bookId]);

  if (pageNotFound) {
    return <Redirect to={"/not-found"} />;
  }

  if (updatedBook) {
    return <Redirect to={"/"} />;
  }

  if (queryLoading) {
    return <div>Preparing form...</div>;
  }

  if (queryError) {
    return <div>Form creation failure</div>;
  }

  if (data?.book === null) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div>
        edit book: {`bookId: ${bookId}, booktTitle: ${data?.book?.title}`}
      </div>
      {mutationLoading && <div>Sending form</div>}
      {!mutationError && !mutationLoading && (
        <BookForm
          initialValues={{
            author: data?.book?.author || "",
            title: data?.book?.title || "",
            price: data?.book?.price?.toString() || "",
          }}
          onSubmit={handleSubmit}
        />
      )}
      {mutationError && <div>Something went wrong</div>}
      <Link to={"/"} children={"go back"} />
    </>
  );
};

export default EditBookPage;
