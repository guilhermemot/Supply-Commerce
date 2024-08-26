import React from 'react'
import Image from 'next/image';
import { CalendarIcon } from '@heroicons/react/16/solid';

interface Props {
    image: string;
    title: string;
    details: string;
}
const NewsCard = ({ image, title, details }: Props) => {
    return(
    <>
        <div className='col-span-2 space-x-2 w-[100%] h-[200px]'>
            <Image className='w-auto h-auto md:w-[100%] md:h-[100%] object-contain shadow-lg' src={`${image}`} alt={title} width={300} height={200} />
        </div>
        <div className='col-span-4'>
            <h1 className='text-[22px] mb-[1rem] text-black capitalize'>{title}</h1>
            <div className='flex mb-[0.4rem] items-center space-x-2 bg-4f772d'>
                <h1 className='text-[11px] mb-[1rem] text-black opacity-2'>{details}</h1>
            </div>
        </div>
    </>
    );
};

export default NewsCard