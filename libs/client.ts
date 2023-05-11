import { createClient } from 'microcms-js-sdk';
//  filters: 'category[equals]6jm-4h1rkdon'
//  tags[contains]9vi1-6jzz
export const client = createClient({
  serviceDomain: 'magurodaaa',
  apiKey: process.env.API_KEY || '',
});
