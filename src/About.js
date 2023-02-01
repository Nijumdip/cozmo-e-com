import { useContext } from 'react';
import HeroSection from './components/HeroSection'
import {  AppContext, useProductContext } from './context/productcontex'

const About = () => {

  // const {myName} = useContext(AppContext);
  const {myName} = useProductContext();
  return (
    <>
      {myName}
    <HeroSection title="Thapa Ecommerce" />
    </>
  )
}

export default About