import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = 'https://spacex-production.up.railway.app/';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

console.log(client);

export default client;