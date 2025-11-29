import ImageSlider from './Homecomponents/Sliding';
import React from 'react';
import About from '@/app/Homecomponents/About'


function page() {
  return (
    <>
    <div className="py-10">
      <ImageSlider />
    </div>
    <About/>
    </>

  )
}

export default page