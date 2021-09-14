import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  heading,
  intro,
  number,
  title,
  'slug': slug.current,
  date,
  subtitle,
  projectIntro,
  projectRole,
  featuredImage,
  blogMainIntro,
  secondFeaturedImage,
  image,
`

const builder = imageUrlBuilder(client)
const getClient = preview => preview ? previewClient : client

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs({offset} = {offset: 0}) {
  const results = await client
    .fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}[${offset}...${offset + 5}]`);
  return results;
}

export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`, {slug})
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])
  return result;
}
