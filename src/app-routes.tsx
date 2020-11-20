import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ListBooksPage = lazy(
  () => import("./features/list-books/list-books.page")
);
const EditBookPage = lazy(
  () => import("./features/edit-book/edit-book.page")
);
const CreateBookPage = lazy(
  () => import("./features/create-book/create-book.page")
);

const AppRoutes = () => (
  <Suspense fallback={<div>loading</div>}>
    <Router>
      <Switch>
        <Route path={"/"} component={ListBooksPage} exact />
        <Route path={"/book/:id/edit"} component={EditBookPage} />
        <Route path={"/create"} component={CreateBookPage} />
      </Switch>
    </Router>
  </Suspense>
);

export default AppRoutes;
