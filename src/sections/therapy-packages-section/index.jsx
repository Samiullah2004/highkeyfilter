import { groq } from 'next-sanity'
import classnames from 'classnames'
import TherapyPackage from '../../components/therapy-package'
export const fragment = groq`
`

export default function TherapyPackagesSection({ otherClasses, heading,packages }) {
  const therapyPackagesSectionClasses = classnames(otherClasses, 'px-[120px] max-w-[1512px] mx-auto py-20')

  return (
    <section
      className={therapyPackagesSectionClasses}
      data-testid="therapy-packages-section"
    >
      <h2 className='font-bold text-2xl mb-4'>{heading}</h2>

      <div>
        {packages?.map((node,index) => <TherapyPackage key={index} {...node} />)}
      </div>
    </section>
  )
}

export const THERAPY_PACKAGES_SECTION = groq`
 _type == "therapyPackagesSection" => {
   _type,
    identifier,
    heading,
    packages[]{
      categories->{
      title},
     package[]{
       title,
       price,
       perSectionPrice,
       round,
       subTitle,
       text,
       button
     },
    },
   
}
`
