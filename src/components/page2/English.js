import React from 'react'
import BottomCarousel from '../page1/BottomCarousel'
import Sidebar2 from './Sidebar2'
import { useLayoutEffect } from 'react';
function English() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
       <Sidebar2 />
       <BottomCarousel />
    </>
  )
}

export default English