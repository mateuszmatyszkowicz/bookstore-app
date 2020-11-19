import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import appConfig from "../consts/app-config";

const graphqlClient = new ApolloClient({
  uri: appConfig.graphqlServerUrl,
  cache: new InMemoryCache(),
});

export default graphqlClient;
