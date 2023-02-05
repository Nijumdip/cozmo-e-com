import React from 'react'
import { useProductContext } from '../context/productcontex'


const FeatureProduct = () => {
    const {isLoading, featureProducts} = useProductContext()
  return (
    <div>FeatureProduct</div>
  )
}

export default FeatureProduct