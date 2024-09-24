import { groq } from 'next-sanity'
import classnames from 'classnames'

export const fragment = groq`
`

export default function GenaricTwoColumnSection({otherClasses,heading}) {

  const genaricTwoColumnSectionClasses = classnames(otherClasses);
  
  return (
    <section className={genaricTwoColumnSectionClasses} data-testid='genaric-two-column-section'>
       
        <h1>{heading}</h1>
    </section>
  )
}

export const GENARIC_TWO_COLUMN_SECTION = groq`
_type == "genericTwoColumnSection" => {
  _type,
  heading,
  subText,
  button,
  }
`

