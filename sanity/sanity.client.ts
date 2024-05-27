// sanity/sanity.client.ts

import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: '28j0c59x',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false
};

const client = createClient(config);

export default client;
