import { gql } from "@apollo/client";

export const EMPTY_BOOKS_QUERY = {
  request: {
    query: gql`
      query Books {
        books {
          bookId
          title
          author
          price
          __typename
        }
      }
    `,
    variables: {},
  },
  result: {
    data: {},
  },
};

export const SINGLE_BOOK_QUERY = {
  request: {
    query: gql`
      query Book($bookId: Int!) {
        book(bookId: $bookId) {
          bookId
          title
          author
          price
          __typename
        }
      }
    `,
    variables: {
      bookId: 11,
    },
  },
  result: {
    data: {},
  },
};
