import React from 'react'
import NewsCard from './Helper/NewsCard'

const News = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-white'>
        <h1 className='w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-black'>
            Lasted news
        </h1>
        <div className='mt-[2rem]'>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto'>
                <NewsCard image='/image/creatinaMax.jpg' title='Melhor desempenho físico' details='A Creatina foi descoberta pelo cientista Michel Chevreul em 1832. É derivada de aminoácidos (arginina, metionina e glicina), e pode ser obtida através de duas fontes:

Endógena , ou seja, produzida pelo nosso próprio organismo a partir destes aminoácidos;

Exógena , através do consumo de carnes vermelhas, aves, peixes e alguns vegetais. Em 1kg de carne vermelha ou salmão encontramos aproximadamente 4.5g de creatina!

Ela é armazenada principalmente na musculatura esquelética (95%); os 5% restante encontram-se distribuídos no cérebro, fígado, rim e testículos.'/>
                <NewsCard image='/image/wheyMax.jpg' title='Reposição de proteinas diarias' details=''/>
                <NewsCard image='/image/creatinaGrowth.jpg' title='Qualidade diretamente da fabrica' details=''/>
            </div>
        </div>
    </div>
  )
}

export default News