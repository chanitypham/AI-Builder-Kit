"use client";

import { TypeAnimation } from 'react-type-animation';

export const TypedComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'build your own AI Hub',
        1000,
        'customize your own AI workflows',
        1000,
        "have a website displaying your unique AI tools",
        1000,
      ]}
      wrapper="span"
      speed={70}
      style={{display: 'inline-block' }}
      repeat={Infinity}
      className='text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-extratight text-gray-700'
    />
  );
};

