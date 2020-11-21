import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  bookId: Scalars['Int'];
  title: Scalars['String'];
  author: Scalars['String'];
  price: Scalars['Float'];
};

export type BookInput = {
  title: Scalars['String'];
  author: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  book?: Maybe<Book>;
};


export type QueryBookArgs = {
  bookId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<Book>;
  editBook?: Maybe<Book>;
};


export type MutationCreateBookArgs = {
  title: Scalars['String'];
  author: Scalars['String'];
  price: Scalars['Float'];
};


export type MutationEditBookArgs = {
  bookId: Scalars['Int'];
  title: Scalars['String'];
  author: Scalars['String'];
  price: Scalars['Float'];
};

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'bookId' | 'title' | 'author' | 'price'>
  )>>> }
);

export type BookQueryVariables = Exact<{
  bookId: Scalars['Int'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { book?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'bookId' | 'title' | 'author' | 'price'>
  )> }
);

export type CreateBookMutationVariables = Exact<{
  title: Scalars['String'];
  author: Scalars['String'];
  price: Scalars['Float'];
}>;


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author' | 'price'>
  )> }
);

export type EditBookMutationVariables = Exact<{
  bookId: Scalars['Int'];
  title: Scalars['String'];
  author: Scalars['String'];
  price: Scalars['Float'];
}>;


export type EditBookMutation = (
  { __typename?: 'Mutation' }
  & { editBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author' | 'price'>
  )> }
);


export const BooksDocument = gql`
    query Books {
  books {
    bookId
    title
    author
    price
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const BookDocument = gql`
    query Book($bookId: Int!) {
  book(bookId: $bookId) {
    bookId
    title
    author
    price
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const CreateBookDocument = gql`
    mutation CreateBook($title: String!, $author: String!, $price: Float!) {
  createBook(title: $title, author: $author, price: $price) {
    title
    author
    price
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, baseOptions);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const EditBookDocument = gql`
    mutation EditBook($bookId: Int!, $title: String!, $author: String!, $price: Float!) {
  editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
    title
    author
    price
  }
}
    `;
export type EditBookMutationFn = Apollo.MutationFunction<EditBookMutation, EditBookMutationVariables>;

/**
 * __useEditBookMutation__
 *
 * To run a mutation, you first call `useEditBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBookMutation, { data, loading, error }] = useEditBookMutation({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      title: // value for 'title'
 *      author: // value for 'author'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useEditBookMutation(baseOptions?: Apollo.MutationHookOptions<EditBookMutation, EditBookMutationVariables>) {
        return Apollo.useMutation<EditBookMutation, EditBookMutationVariables>(EditBookDocument, baseOptions);
      }
export type EditBookMutationHookResult = ReturnType<typeof useEditBookMutation>;
export type EditBookMutationResult = Apollo.MutationResult<EditBookMutation>;
export type EditBookMutationOptions = Apollo.BaseMutationOptions<EditBookMutation, EditBookMutationVariables>;