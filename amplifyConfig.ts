import { Amplify } from 'aws-amplify';

const GraphQLAPIURL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL!;
const GraphQLAPIKey = process.env.NEXT_PUBLIC_GRAPHQL_API_KEY!;
const Region        = process.env.AWS_REGION!;

Amplify.configure({
  aws_appsync_graphqlEndpoint:    GraphQLAPIURL,
  aws_appsync_region:             Region,
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey:             GraphQLAPIKey,
} as any);