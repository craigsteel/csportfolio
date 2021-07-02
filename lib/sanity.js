/* eslint-disable no-undef */
import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25' // use a UTC date string
  // useCdn === true, gives you fast response, it will get you cached data
  // useCdn === false, gives you slower response, but latest data
};

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  ignoreBrowserTokenWarning: true
})

export default sanityClient(options);
