import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'hiro-test',
  apiKey: process.env.API_KEY,
});
