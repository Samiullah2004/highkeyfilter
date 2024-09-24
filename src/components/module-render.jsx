import { groq } from "next-sanity"
import GenaricTwoColumnSection, {GENARIC_TWO_COLUMN_SECTION} from "../sections/genaric-two-column-section"
import HomeHeroSection, {HOME_HERO_SECTION} from "../sections/home-hero-section"
import TherapyPackagesSection, {THERAPY_PACKAGES_SECTION} from "../sections/therapy-packages-section"

export const fragment = groq`
${HOME_HERO_SECTION},
${GENARIC_TWO_COLUMN_SECTION},
${THERAPY_PACKAGES_SECTION},
`
 
 const ModuleRender = ({modules = [],id}) => {
    return modules.map((module,index) => {
        switch(module?._type){
            case "homeHeroSection" : 
            return <HomeHeroSection key={index} {...module} id={id} /> 
            case "genericTwoColumnSection" : 
            return <GenaricTwoColumnSection key={index} {...module}  id={id} /> 
            case "therapyPackagesSection" : 
            console.log(module)
            return <TherapyPackagesSection key={index} {...module}  id={id} /> 
        }
    })
 }

 export default ModuleRender