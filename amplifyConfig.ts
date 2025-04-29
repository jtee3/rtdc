// amplifyConfig.ts
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure({
  API: {
    GraphQL: {
      // AppSync URL 
      endpoint: outputs.GraphQLAPIURL,
      // AWS region—ensure for NEXT_PUBLIC_AWS_REGION 
      region: process.env.NEXT_PUBLIC_AWS_REGION!,
      // API key auth
      defaultAuthMode: 'apiKey',
      apiKey: outputs.GraphQLAPIKey,
    }
  }
});