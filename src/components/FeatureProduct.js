import React from 'react'
import { useProductContext } from '../context/productcontex'


const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log(featureProducts);

    if (isLoading) {
        return <div>......Loading </div>
    }
  return (
      <>
      
      
      </>
  )
}

export default FeatureProduct