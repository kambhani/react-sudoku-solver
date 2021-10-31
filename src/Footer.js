import React from 'react';

const Footer = ({setView}) => {
  return (
    <footer className="w-full text-gray-200 bg-gray-800 text-justify mt-6 flex justify-center items-center py-4 px-8">
      <div className="w-full grid grid-cols-12 flex sm:block items-center">
        <div className="col-span-5 text-left border-r-4 mr-10 pr-2 pr-0 sm:mr-0 sm:border-none sm:text-center font-bold sm:flex sm:justify-around">
          <p className="leading-4 cursor-pointer sm:my-1 hover:text-gray-400" tabIndex="0" onClick={() => setView('solver')}>Sudoku Solver</p>
          <p className="leading-4 my-6 cursor-pointer sm:my-1 hover:text-gray-400" tabIndex="0" onClick={() => setView('about')}>About</p>
          <p className="leading-4 cursor-pointer sm:my-1 hover:text-gray-400" tabIndex="0" onClick={() => setView('faq')}>FAQ</p>
        </div>
        <hr className="hidden w-full my-1.5 sm:block"/>
        <p className="col-span-7 italic text-sm font-semibold text-justify md:text-center">A 100% open source project by Anish Kambhampati, dedicated to all those who love the art of sudoku.</p>
      </div>
    </footer>
  )
}

export default Footer;