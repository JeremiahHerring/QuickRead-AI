import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='QuickRead_logo' className='w-36 my-8 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/jeremiahherring", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Web Content Using <br className='max-md:hidden' />
        <span className='orange_gradient '>Our AI Platform</span>
      </h1>
      <h2 className='desc'>
        Summarize website content within seconds using QuickRead AI! Just paste the URL and click!
      </h2>
    </header>
  );
};

export default Hero;