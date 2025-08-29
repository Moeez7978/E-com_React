import React from 'react'
import { useProductContext } from '../productContext'
import Product from '../components/Product'

const FeatureProducts = () => {
    const{isLoading,featureProducts}=useProductContext();
    if(isLoading){
        return <h1>Loading...</h1>
    }
    return (
    <>
      <div className="container">
        <div className="intro-data ml-20">
            <h1 className='text-lg font-light uppercase'>Check Now!</h1>
            <h1 className='text-2xl font-bold uppercase'>Our Feature Products</h1>
        </div>
        <div className="flex flex-wrap justify-center">
            {featureProducts.map((product)=>{
                return <Product key={product.id} {...product}/>
            })}
        </div>
      </div>
    </>
  )
}

export default FeatureProducts
