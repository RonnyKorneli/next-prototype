import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/client';

//const endpoint = process.env.FRONTEND_SERVICE_ENDPOINT as string;
const endpoint = 'http://frontend-service.pde:8080/graphql';
const graphQlClient = new GraphQLClient(endpoint);
const TypedQLClient = getSdk(graphQlClient);

export default TypedQLClient;
