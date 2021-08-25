import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import PatientSection from '../../PatientSection';

function Home() {
  return (
    <>
    {/* Properties which we want to display via Hero */}
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <PatientSection />
    </>
  );
}

export default Home;