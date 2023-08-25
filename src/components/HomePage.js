import React from 'react'
import { useLottie } from 'lottie-react';
import animationData from './animation_llqwzbts.json';
const style = {
  height: "80vh",
  width: "100vw",
  background: 'white',
};
function HomePage() {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options, style);
  return View;
}

export default HomePage