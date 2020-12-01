import {  ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from "@apollo/client/utilities";

import { config } from 'config/Config';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = config.token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
