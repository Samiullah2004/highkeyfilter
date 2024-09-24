import { groq } from 'next-sanity'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const fragment = groq`
`

export default function TherapyPackage({otherClasses, categories}) {

  const therapyPackageClasses = classnames(
    otherClasses
  )
  let [state,setState] = useState(0)
  const router = useRouter()
  const { query } = router
 
  
  const handleBalance = (title) => {
    router.push({
      pathname: router.pathname,
      query: { ...query, title },
    })
  }
  
  return (
    <div className={therapyPackageClasses} data-testid='therapy-package'>
        <button onClick={() => handleBalance(categories.title)} className='px-4 py-1 bg-gray-300 rounded-md'>{categories.title}</button>
      
    </div>
  )
}

