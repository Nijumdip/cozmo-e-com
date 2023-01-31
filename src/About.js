import HeroSection from './components/HeroSection'
import {  useProductContext } from './context/productcontex'

const About = () => {

  const {myName} = useProductContext();
  return (
    <>
      {myName}
    <HeroSection title="Thapa Ecommerce" />
    </>
  )
}

export default About