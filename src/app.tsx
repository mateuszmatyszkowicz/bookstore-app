import { ApolloProvider } from "@apollo/client";
import React from "react";
import graphqlClient from "./core/graphql/client";

const App: React.FC = ({ children }) => {
  return <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>;
};

export default App;
