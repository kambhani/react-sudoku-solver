import React from 'react';

const Faq = ({view, handleAccordionClick}) => {
  return (
    <div className={(view === 'faq') ? "grid grid-cols-12" : "hidden"}>
      <div className="mt-3 px-3 col-span-12 lg:col-span-12 lg:px-6 dark:text-gray-200">
        <div className="px-2 sm:px-5 md:px-12">
          <h1 className="text-4xl my-2 font-semibold text-center">Frequently Asked Questions</h1>
          <div className="accordion text-center mt-6">
            <div className="border-t border-l border-r border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>Does this application work on mobile?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">Yes! This application is designed to work on mobile, tablet, and laptop screen sizes.</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>What sudoku grid sizes do you support?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">We currently support 4x4, 9x9, and 16x16 sudoku grid sizes.</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>How do I use the sudoku solver?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">First, you need to select the grid size of the sudoku you are trying to solve. This can be from the dropdown located either beneath (for smaller screens) or to the right (for larger screens) of the sudoku. Next, enter the values of the sudoku exactly as they appear onto the sudoku grid provided by the solver. (Note that for 16 by 16 grids, you will need to use the letters a through g to represent numbers 10-16.) Finally, press solve to initiate the solving sequence. If all goes well, you should see the sudoku grid filled in.</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>What does the message board mean by "iteration count"?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">Iteration count is an internal measure of how many cycles it took for the solving algorithm to arrive at the state shown on the screen. It is purely informative and has no effect on the sudoku's answer.</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>What does the message board mean when it says "sudoku cannot be solved"?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">Simply put, it means that the sudoku grid inputted has no solution. This is likely the result of an improperly inputted sudoku grid. If, however, you believe that the grid was inputted properly, then it could be a bug in the solving algorithm. Be sure to let me know if that is the case!</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>What does the message board mean when it says "sudoku solving was not successful"?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">This message means, well, that the sudoku solver could not successfully fill in the sudoku provided. This is likely because you entered a very hard sudoku for the solver to complete. Unfortunately, the solver is not capable of solving sudokus of high difficulty. Another reason for this message would be because you entered insufficient information (such as filling in too few cells).</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>How do you read the ordered pairs provided by the message board?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">The message board may provide ordered pairs in certain circumstances, such as when there is an invalid input on the grid. The first number is the row number. Row numbers go top to down and start at one. The second number is the column number. Column numbers go left to right and also start at one.</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>Can I see how this application works?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">Of course! This website is free and open source. Access the source code <a className="text-blue-700" href="https://github.com/kambhani/react-sudoku-solver/">here</a>.</p>
              </div>
            </div>
            <div className="border border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>How can I help with this application?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">Sharing this application with others is a great way to increase this application's visibility. This will help the application grow. In addition, sharing is easy — anyone can do it. You can also submit a pull request on our <a className="text-blue-700" href="https://github.com/kambhani/react-sudoku-solver/">GitHub repository</a>. Some areas where we are looking to improve are the message board styling, sudoku solving algorithm, and general code organization.</p>
              </div>
            </div>
            <div className="border-b border-l border-r border-black dark:border-gray-200 mx-auto w-full lg:w-3/4">
              <button className="w-full py-1.5 px-6 font-semibold text-left bg-purple-300 dark:bg-purple-800 hover:bg-purple-400 dark:hover:bg-purple-900 focus:outline-none focus:ring-4 ring-inset ring-blue-700 dark:ring-blue-500" onClick={(event) => handleAccordionClick(event.target)}>
                <span>Who do I contact with further questions or comments?</span>
                <p className="float-right font-black">+</p>
              </button>
              <div className="overflow-hidden px-2" style={{height: "0", transition: "height 0.4s"}}>
                <p className="px-4 py-3 text-justify">You can fill out <a className="text-blue-700" href="https://forms.gle/45By492ar4gpDpFi9">this form</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;

