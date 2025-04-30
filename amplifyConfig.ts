// amplifyConfig.ts
import { Amplify } from 'aws-amplify';
// path to the file the sandbox just generated:
import outputs from './amplify/amplify_outputs.json';

Amplify.configure(outputs);