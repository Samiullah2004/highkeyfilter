import { groq } from 'next-sanity'
import { getClient } from '~/lib/sanity.client'
import ModuleRender,{fragment as MODULE_FRAGMEN} from '../components/module-render'
export const getPageQuery = (slug) => groq`
   *[_type == "pages" && slug.current == "${slug}"]{
     _type,
  _id,
  indexed,
  seoTitle,
  metaDescription,
  title,
  JSONLD,
  "slug": slug.current, 
  pageBuilder[]->{
  ${MODULE_FRAGMEN}
  }
    }
`
const Page = (props) => {
  const { page: {pageBuilder}, JSONLD } = props
  console.log(pageBuilder)
  return <div>
    <ModuleRender modules={pageBuilder} /> 
   </div>
}

export async function getStaticPaths() {
  const client = getClient()
  const allSlugs = await client.fetch(
    groq`
    *[_type == "pages"]{
    "title" : title,
    "slug" : slug.current, 
    }`,
  )

  const paths = allSlugs.map(({ slug }) =>
    slug !== '/' ? `/${slug}` : `${slug}`,
  )

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  try {
    let slug = '/'
    if (Object.keys(params || {}).length) {
      const { slug: currentSlug } = params
      slug = currentSlug.join('/')
    }

    if (!slug) throw new Error('No Slug Provided')
    const client = getClient()
    const pageQuery = getPageQuery(slug)
    const pageData = await client.fetch(pageQuery)

    const props = {
      page: pageData[0],
      JSONLD: pageData[0]?.JSONLD || '',
    }
    return {
      props,
      revalidate: 10,
    }
  } catch (error) {
    throw new Error(error)
  }
}
export default Page

// import { groq } from "next-sanity"
// import { getClient } from "~/lib/sanity.client"

// export const getPageQuery = (slug) => groq`
// *[_type == "pages" && slug.current == '${slug}']{
//   _type,
//   _id,
//   indexed,
//   seoTitle,
//   metaDescription,
//   title,
//   JSONLD,
//   "slug": slug.current,
// }`

// const Page = () => {
// return(
//   <div>Hello Page</div>
// )
// }

// export async function getStaticPaths() {

//   const client = getClient()
//   const allSlugs = await client.fetch(
//     groq`
//     *[_type == "pages"]{
//     "title" : title,
//     "slug" : slug.current,
//     }
//     `
//   )

//   const paths = allSlugs.map(({slug}) => (slug !== "/" ? `/${slug}` : `${slug}`))

//   return { paths, fallback: false }
// }

// export async function getStaticProps({params}) {
//  try{
//   let slug = "/"
//   if(Object.keys(params || {}).length){
//     let {slug : currentSlug} = params;
//     slug = currentSlug.join('/')
//   }

//   const client = getClient()
//   if(!slug) throw new Error("No Slug Provided")
//     const pageQuery = getPageQuery(slug)
//   const pageData = await client.fetch(pageQuery)
//   console.log(pageData)

//   return {
//     props : {}
//   }
// }catch(error){
//   throw new Error(error)
// }
// }
// export default Page;
