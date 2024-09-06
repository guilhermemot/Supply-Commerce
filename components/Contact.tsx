import React from 'react'

const Contact = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-green-950'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem]'>
                <div>
                    <h1 className='text-[25rem] md:text-[30px] lg:text-[35px] leading-[2.4rem] text-white'>
                        Nós envie seu e-mail para mais informações sobre novos itens
                    </h1>
                    <p className='text-[17px] text-white mt-[0.8rem] mb-[1.5rem] opacity-70'>Enviaremos a você por e-mail um voucher no valor de 10 R$ de desconto em seu primeiro pedido acima de 50 R$
                    </p>
                    <div className='w-[100%] relative h-[2.7rem] mb-[0.3rem] bg-white'>
                        <input type="e-mail" placeholder='Informe seu e-mail' className='w-[70%] md:w-[79%] bg-white ml-4 outline-none h-[2.7rem]'/>
                        <button className='w-[20%] md:w-[18.5%] right-0 absolute h-[2.7rem] bg-blue-100 hover:bg-blue-400 transition-all duration-200'>Inscreva-se</button>
                        <p className='text-[14px] mt-[0.2rem] text-white capitalize opacity-35 font-thin'>
                            Se inscrevendo está concordando com os termos de privacidade e política de coockies
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact