import React from 'react'
import NewsCard from './Helper/NewsCard'

const News = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg2'>
      <h1 className='w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-black'>
        Lasted news
      </h1>
      <div className='mt-[2rem] mb-[2rem] p-8'>
          <div className='grid grid-cols-1 md:grid-cols-6 p-8 gap-[3rem] w-[80%] mx-auto bg-white rounded-md'>
            <NewsCard image='/image/creatinaMax.jpg' title='Melhor desempenho físico' details='A Creatina foi descoberta pelo cientista Michel Chevreul em 1832. É derivada de aminoácidos (arginina, metionina e glicina), e pode ser obtida através de duas fontes:

Endógena , ou seja, produzida pelo nosso próprio organismo a partir destes aminoácidos;

Exógena , através do consumo de carnes vermelhas, aves, peixes e alguns vegetais. Em 1kg de carne vermelha ou salmão encontramos aproximadamente 4.5g de creatina!

Ela é armazenada principalmente na musculatura esquelética (95%); os 5% restante encontram-se distribuídos no cérebro, fígado, rim e testículos.'/>
          <NewsCard image='/image/wheyMax.jpg' title='Reposição de proteinas diarias' details='O Whey Protein (WP) apresenta alto valor biológico, devido às altas concentrações proteicas, e presença de compostos bioativos, por isso, atualmente é considerado um alimento funcional.

A suplementação com WP demonstra efeitos benéficos em estratégias de emagrecimento, aumento da saciedade, ação antioxidante, aumento da síntese proteica e contribui de forma positiva para a saúde.' />
          <NewsCard image='/image/creatinaGrowth.jpg' title='Qualidade diretamente da fabrica' details='Ao adquirir nossa creatina, você estará adquirindo um produto de fabricação Creapure®. A Creapure® é uma fabricante campeã de vendas, produtora da matéria-prima mais utilizada pelas principais marcas importadas. Assim, fica mais fácil consumir um produto conceituado a um preço acessível, que cabe no seu bolso.' />
        </div>
      </div>
    </div>
  )
}

export default News