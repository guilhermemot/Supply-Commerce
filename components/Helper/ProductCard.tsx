import React from 'react'
import Image from 'next/image';
import { HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/16/solid';

interface Props{
    image:string;
    category:string;
    title:string;
    discountPrice:string;
    actualPrice:string;
    cifrao:string;
}

const ProductCard = ({title,image,discountPrice,category,actualPrice,cifrao}:Props) => {
  return (
    <div className=' bg-white rounded object-contain md:w-[95%] md:h-[100%] p-4'>
      <div className='w-[100%] h-[200px]'>
        <Image 
        src={`${image}`} 
        alt={title} 
        width={350} 
        height={200} 
        className='w-[100%] h-[100%] object-contain md:w-[100%] md:h-[100%] shadow-lg '/>
      </div>
      <div className='mt-[1rem] ml-2 w-[100%] md:w-[95%]'>
        <div className='flex items-center justify-between'>
            <p className='text-[14px] text-black opacity-70'>{category}</p>
            <HeartIcon className='w-[1rem] h-[1rem] text-black '/>
        </div>
        <h1 className='mt-[0.3rem] font-bold text-black opacity-85'>{title}</h1>
        <div className='mt-[0.3rem] flex items-center'>
          <StarIcon className="w-[1rem] h-[1rem] text-black-400"/>
          <StarIcon className="w-[1rem] h-[1rem] text-black-400"/>
          <StarIcon className="w-[1rem] h-[1rem] text-black-400"/>
          <StarIcon className="w-[1rem] h-[1rem] text-black-400"/>
          <StarIcon className="w-[1rem] h-[1rem] text-black-400"/>
        </div>
        <div className='mt-[0.3rem] flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <p className='text-[12px]'>De </p>
            <p className='text-[11px] line-throug text-black line-through'>{actualPrice}</p>
            <p className='text-[12px]'>{cifrao}</p>
            <p className='text-[12px]'>Por </p>
            <p className='text-[11px] text-black'>{discountPrice}</p>
            <p className='text-[12px]'>{cifrao}</p>
          </div>
        <ShoppingBagIcon className="w-[1.2rem] h-[1.2rem] text-black cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
