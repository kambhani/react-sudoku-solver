import React from 'react';

const Modal = ({modalDisplay, setModalDisplay, theme, handleThemeChange, letterCase, handleLetterCaseChange}) => {
  const handleModalClose = () => {
    document.getElementById('modalContent').classList.remove('modal-fade-in');
    document.getElementById('modalContent').classList.add('modal-fade-out');
    setTimeout(() => {
      document.getElementById('modalContent').classList.add('modal-fade-in');
      document.getElementById('modalContent').classList.remove('modal-fade-out');
      setModalDisplay('hidden');
    }, 200);
  }

  return (
    <div className={modalDisplay + " left-0 top-0 z-10 pt-16 w-full h-full bg-gray-300 bg-opacity-75"} onClick={() => handleModalClose()}>
      <div id="modalContent" className="relative bg-gray-50 p-8 w-3/4 m-auto border-green-400 border-4 rounded-xl dark:bg-gray-900 dark:text-gray-100 dark:border-green-800 modal-fade-in" onClick={(event) => event.stopPropagation()}>
        <button className="absolute top-3 right-3 border-0 text-gray-400 hover:text-gray-500">
          {/*This code was taken from: https://icons.getbootstrap.com/icons/x-lg/, licensed MIT*/}
          <svg id="modal_close" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-label="X icon" onClick={() => handleModalClose()}>
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
          </svg>
        </button>
        <h1 className="font-bold text-xl text-center mb-5">Settings</h1>
        <label>
          <div className="grid grid-cols-12">
            <div className="m-3 col-span-12 sm:col-span-6">
              <span className="text-gray-700 dark:text-gray-200">Application theme</span>
              <select className="form-select w-full mt-1 p-2 border-2 border-gray-700 dark:border-gray-200 dark:bg-black" value={theme} onChange={(event) => handleThemeChange(event.target.value)}>
                <option value='default'>System default</option>
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
              </select>
            </div>
            <div className="m-3 col-span-12 sm:col-span-6">
              <span className="text-gray-700 dark:text-gray-200">Letter capitalization</span>
              <select className="form-select w-full mt-1 p-2 border-2 border-gray-700 dark:border-gray-200 dark:bg-black" value={letterCase} onChange={(event) => handleLetterCaseChange(event.target.value)}>
                <option value='uppercase'>Uppercase</option>
                <option value='lowercase'>Lowercase</option>
              </select>
            </div>
          </div>
        </label>
        <p></p>
      </div>
    </div>
  )
}

export default Modal;