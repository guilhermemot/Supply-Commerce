import React from 'react'
import ProductCard from './Helper/ProductCard'

const BestSeller = () => {
    return (
        <div className='bg-green-600 pt-[4rem] pb-[3rem] '>
            <div className='w-[80%] mx-auto flex items-center justify-between'>
                <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-black'>Best Seller</h1>
                <button className='uppercase text-[13px] md:text-[15px] text-black'>View All products</button>
            </div>
            <div className='grid grid-cols-1 mt-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto'>
                <div><ProductCard
                    title='Whey concentrado Growth'
                    actualPrice='110.00'
                    cifrao='R$'
                    discountPrice='99.00'
                    category='Proteina'
                    image="/image/wheyGrowth.jpg" />
                </div>
                <div><ProductCard
                    title='Creatina Monohidratada Growth'
                    actualPrice='120.00'
                    cifrao='R$'
                    discountPrice='100.00'
                    category='Creatina'
                    image="/image/creatinaGrowth.jpg" />
                </div>
                <div><ProductCard
                    title='Creatina Integral Médica'
                    actualPrice='100.00'
                    cifrao='R$'
                    discountPrice='90.00'
                    category='Creatina'
                    image="/image/creatinaIntegral.jpg" />
                </div>
                <div><ProductCard
                    title='Whey 100% Max Titanium'
                    actualPrice='130.00'
                    cifrao='R$'
                    discountPrice='100.00'
                    category='Proteina'
                    image="/image/wheyMax.jpg" />
                </div>
                <div><ProductCard
                    title='Whey 100% Integral medica'
                    actualPrice='122.00'
                    cifrao='R$'
                    discountPrice='110.00'
                    category='Proteina'
                    image="/image/wheyIntegral.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default BestSeller