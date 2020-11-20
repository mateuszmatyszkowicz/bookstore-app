import React from "react";
import { useBooksQuery } from "../../types";

const ListBooksPage = () => {
  const { data } = useBooksQuery();
  console.log(data);
  return (
    <>
      <div>list book</div>
      <div>{data?.books?.map((book) => book?.bookId)}</div>
    </>
  );
};

export default ListBooksPage;
