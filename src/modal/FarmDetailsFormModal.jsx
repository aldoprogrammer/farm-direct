import React from 'react';

const FarmDetailsFormModal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>
      <div className="relative w-96 bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Modal Title</h2>
          <p className="text-sm text-gray-500">Modal content goes here</p>
        </div>
        <button onClick={closeModal} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FarmDetailsFormModal;
