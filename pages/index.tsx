import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import TopProduct from '@/components/TopProduct';

const HomePage = () =>{
  return (
  <div className='overflow-hidden'>
    <Nav/>
    <Hero/>
    <FeaturedProducts/>
    <TopProduct/>
    {/* Top Products */}
  </div>
  );
};

export default HomePage;