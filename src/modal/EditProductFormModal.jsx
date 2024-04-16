import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonFarmDirect from '../components/ButtonFarmDirect';
import ButtonCancel from '../components/ButtonCancel';

const EditProductFormModal = ({ closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-filter backdrop-blur-sm">
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>

            {/* modal background white */}
            <div className="relative w-[90%] h-[90vh] bg-white rounded-lg shadow-lg py-2 px-2">

                {/* top title */}
                <div className='flex items-center justify-between'>
                    <h2 className="text-xl font-bold mx-auto">Edit Farm General Details</h2>
                    <button onClick={closeModal} className="p-2 text-[#000000] hover:text-[#010101] transition-all ease-in duration-300 focus:outline-none border-[#D8D8DA] border-2 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                {/* Form */}
                <div className="text-center mb-4">
                    <div className='my-2 flex flex-col gap-1 align-center'>
                        <label htmlFor="farmName" className='text-left font-semibold'>Farm Name</label>
                        <input
                            type="text"
                            name="farmName"
                            id="farmName"
                            placeholder='Enter farm name'
                            className='py-2 px-3 rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none'
                        />
                    </div>
                    <div className='my-2 flex flex-col gap-1 align-center'>
                        <label htmlFor="phoneNumber" className='text-left font-semibold'>Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder='Enter phone number'
                            className='py-2 px-3 rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none'
                        />
                    </div>
                    <div className='my-2 flex flex-col gap-1 align-center'>
                        <label htmlFor="businessId" className='text-left font-semibold'>Business ID</label>
                        <input
                            type="text"
                            name="businessId"
                            id="businessId"
                            placeholder='Enter business ID'
                            className='py-2 px-3 rounded-md bg-[#FFFFFF] text-[#89898A] border-[#D8D8DA] border outline-none'
                        />
                    </div>
                </div>

                {/* button */}
                <div className='absolute w-[96%] bottom-5 p-2'>
                    <div className=' flex 
                items-center justify-between flex-row'>
                        <ButtonCancel onClick={closeModal} />
                        <ButtonFarmDirect title="Save" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductFormModal;
