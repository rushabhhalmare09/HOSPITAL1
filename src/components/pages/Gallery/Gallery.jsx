import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import PatientSection from '../../PatientSection';

function Gallery() {
  return (
    <>
      <PatientSection />
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <HeroSection {...homeObjThree} /> */}
    </>
  );
}

export default Gallery;