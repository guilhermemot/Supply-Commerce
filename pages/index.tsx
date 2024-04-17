import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () =>{
  return (
  <div className='overflow-hidden'>
    <Nav/>
    <Hero/>
    <FeaturedProducts/>
    {/* Feature products */}
  </div>
  );
};

export default HomePage;