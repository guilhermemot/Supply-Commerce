import React from 'react'
import FeaturedProductSlider from './Helper/FeaturedProductSlider'

const FeaturedProducts = () => {
  return (
    <div className='pt-[6rem] pb-[3rem] bg-green-600 '>
      <div className='w-[80%] mx-auto flex items-center justify-between'>
        <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-black'>Feature</h1>
        <button className='uppercase text-[13px] md:text-[15px] text-black'>
            View all products
        </button>
      </div>
      <div className='w-[80%] mt-[2rem] mx-auto'>
        <FeaturedProductSlider/>
      </div>
    </div>
  )
}

export default FeaturedProducts
