import React from "react";
import { ApolloProvider } from "@apollo/client";
import graphqlClient from "./core/graphql/client";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import AppRoutes from "./app-routes";
import ApplicationContainer from "./components/application-container/application-container.component";

const App = () => {
  return (
    <ErrorBoundary message={"Something went wrong!"}>
      <ApolloProvider client={graphqlClient}>
        <ApplicationContainer>
          <AppRoutes />
        </ApplicationContainer>
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;
