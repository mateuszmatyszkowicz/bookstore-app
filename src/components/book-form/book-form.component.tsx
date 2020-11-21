import React from "react";
import { useInput } from "../../core/hooks/use-input";

export type BookFormValues = {
  title: string;
  author: string;
  price: string;
}

type BookFormProps = {
  initialValues?: BookFormValues;
  onSubmit: (book: BookFormValues) => void;
};

const BookForm = ({ initialValues, onSubmit }: BookFormProps) => {
  const {
    inputProps: titleInputProps,
    value: titleValue,
    reset: titleReset,
  } = useInput(initialValues?.title || '');
  const {
    inputProps: priceInputProps,
    value: priceValue,
    reset: priceReset,
  } = useInput(initialValues?.price || '');
  const {
    inputProps: authorInputProps,
    value: authorValue,
    reset: authorReset,
  } = useInput(initialValues?.author || '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    titleReset();
    priceReset();
    authorReset();

    onSubmit({ title: titleValue, price: priceValue, author: authorValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" required {...titleInputProps} />
      </label>
      <label>
        Author:
        <input type="text" required {...authorInputProps} />
      </label>
      <label>
        Price:
        <input type="number" required step={0.01} {...priceInputProps} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BookForm;
