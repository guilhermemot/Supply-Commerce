import React from 'react'
import Image from 'next/image';

interface Props{
    image: string;
    title: string;
}
const NewsCard = ({image, title}: Props) => {
  return 
    <>
    <div className='col-span-2'>
        <Image className=''/>
    </div>
    </>;
  
};

export default NewsCard