import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NotFoundPage = lazy(() => import("./pages/not-found/not-found.page"));
const ListBooksPage = lazy(() => import("./pages/list-books/list-books.page"));
const EditBookPage = lazy(() => import("./pages/edit-book/edit-book.page"));
const CreateBookPage = lazy(
  () => import("./pages/create-book/create-book.page")
);

const AppRoutes = () => (
  <Suspense fallback={<div>loading</div>}>
    <Router>
      <Switch>
        <Route path={"/"} component={ListBooksPage} exact />
        <Route path={"/book/:id/edit"} component={EditBookPage} />
        <Route path={"/create"} component={CreateBookPage} />
        <Route path={"*"} component={NotFoundPage} />
      </Switch>
    </Router>
  </Suspense>
);

export default AppRoutes;
