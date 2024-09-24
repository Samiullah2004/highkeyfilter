import { genericTwoColumnSection } from './documents/genericTwoColumnSection'
import  homeHeroSection  from './documents/homeHeroSection'
import  therapyCategorySection  from './documents/therapyCategory'
import  therapyPackagesSection  from './documents/therapyPackages'
import { pages } from './documents/pages'
import { bodyPortableText } from './objects/bodyPortableText'
import { button } from './objects/button'
import { iframe } from './objects/iframe'
import { customImage } from './objects/image'
import { youtube } from './objects/youtube'

export const schemaTypes = [
  // documents
  pages,
  genericTwoColumnSection,
  homeHeroSection,
  therapyPackagesSection,
  therapyCategorySection,
  // objects
  bodyPortableText,
  customImage,
  button,
  iframe,
  youtube,
]
