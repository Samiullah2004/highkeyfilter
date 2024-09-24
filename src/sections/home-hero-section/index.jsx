import { groq } from 'next-sanity'
import classnames from 'classnames'

export const fragment = groq`
`

export default function HomeHeroSection({otherClasses,heading}) {

  const homeHeroSectionClasses = classnames(otherClasses);
  
  return (
    <section className={homeHeroSectionClasses} data-testid='home-hero-section'>
    <h1>hello {heading}</h1>
    </section>
  )
}

export const HOME_HERO_SECTION = groq`
_type == "homeHeroSection" => {
  _type,
  heading,  
}
`