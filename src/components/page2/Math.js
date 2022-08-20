import React from 'react'
import BottomCarousel from '../page1/BottomCarousel'
import Sidebar from './Sidebar'
import { useLayoutEffect } from 'react';
function Math() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  
  return (
    <>
      <Sidebar />
      <BottomCarousel />
    </>
  )
}

export default Math

