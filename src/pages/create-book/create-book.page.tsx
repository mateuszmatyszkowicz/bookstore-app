import React, { useCallback } from "react";
import { Redirect, Link } from "react-router-dom";
import BookForm from "../../components/book-form/book-form.component";
import { BookFormValues } from "../../components/book-form/book-form.component";
import { formatPrice } from "../../core/utils/currency";
import { useCreateBookMutation } from "../../types";
const CreateBookPage = () => {
  const [
    createBook,
    { data: newBook, loading: mutationLoading, error: mutationError },
  ] = useCreateBookMutation();
  const handleSubmit = useCallback(
    (formValues: BookFormValues) => {
      createBook({
        variables: { ...formValues, price: formatPrice(formValues.price) },
      });
    },
    [createBook]
  );

  if (newBook) {
    return <Redirect to={"/"} />;
  }

  return (
    <>
      {" "}
      {mutationLoading && <div>Sending form</div>}
      {!mutationError && !mutationLoading && (
        <BookForm onSubmit={handleSubmit} />
      )}
      {mutationError && <div>Something went wrong</div>}
      <Link to={"/"} />
    </>
  );
};

export default CreateBookPage;
