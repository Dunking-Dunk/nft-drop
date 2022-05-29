import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2021-10-21', // use a UTC date string
    token: process.env.SANITY_API_TOKEN, // or leave blank for unauthenticated usage
    useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
}
  
export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)