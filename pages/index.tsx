import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import TopProduct from '@/components/TopProduct';
import BestSeller from '@/components/BestSeller';

const HomePage = () =>{
  return (
  <div className='overflow-hidden'>
    <Nav/>
    <Hero/>
    <FeaturedProducts/>
    <TopProduct/>
    <BestSeller/>
  </div>
  );
};

export default HomePage;