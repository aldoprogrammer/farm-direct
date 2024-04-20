import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonFarmDirect from '../components/ButtonFarmDirect';
import ButtonCancel from '../components/ButtonCancel';

const RegisterFarmModal = ({ closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-filter backdrop-blur-sm">
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>

            {/* modal background white */}
            <div className="relative w-[90%] h-[50vh]
             bg-white rounded-lg shadow-lg py-2 px-2">

                {/* top title */}
                <div className='flex items-center justify-between'>
                    <div className='mx-auto'>
                        <h2 className="text-base font-bold">
                            Register Your Farm On Blockchain
                        </h2>
                    </div>
                    <button onClick={closeModal} className="p-2 text-[#000000] hover:text-[#010101] transition-all ease-in duration-300 focus:outline-none border-[#D8D8DA] border-2 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                {/* Content */}
                <div className="text-center mb-4 h-4/5 flex flex-col justify-center items-center">
                    <p className='text-base font-body mb-14
                    w-4/5'>
                        Your farm will be given a special
                        Blockchain ID. You will be able to list your  produce
                    </p>
                </div>

                {/* button */}
                <div className='absolute w-[96%] bottom-5 p-2'>
                    <div className=' flex 
                items-center justify-between flex-row'>
                        <ButtonCancel onClick={closeModal} />
                        <ButtonFarmDirect title="Register" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterFarmModal;
