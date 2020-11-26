import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppRoutes from "./app-routes";
import { MockedProvider } from "@apollo/client/testing";
import { EMPTY_BOOKS_QUERY, SINGLE_BOOK_QUERY } from "./core/mocks/books-mocks";

const mocks = [EMPTY_BOOKS_QUERY, SINGLE_BOOK_QUERY];

const MockerAppRotes = () => (
  <MockedProvider mocks={mocks}>
    <AppRoutes />
  </MockedProvider>
);

test("render default route", async () => {
  window.history.pushState({}, "", "/");
  render(<MockerAppRotes />);

  expect(await screen.findByText(/book store/i)).toBeInTheDocument();
});

test("should navigate to create route once click on create", async () => {
  window.history.pushState({}, "", "/");
  render(<MockerAppRotes />);
  
  userEvent.click(await screen.findByText(/create/i));
  expect(await screen.findByText(/Submit/i)).toBeInTheDocument();
});

test("should render NotFound route", async () => {
  window.history.pushState({}, "", "/new");
  render(<MockerAppRotes />);

  expect(await screen.findByText(/not found/i)).toBeInTheDocument();
});

test("should render NotFound route once user put a invalid bookId as query url", async () => {
  window.history.pushState({}, "", "/book/1test1/edit");
  render(<MockerAppRotes />);

  expect(await screen.findByText(/not found/i)).toBeInTheDocument();
});
