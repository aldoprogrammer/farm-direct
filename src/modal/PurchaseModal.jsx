import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ButtonFarmDirect from '../components/ButtonFarmDirect';
import ButtonCancel from '../components/ButtonCancel';
import ThumbnailProduct from '../assets/product1.png';
import { Option, Select, Checkbox } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Swal from 'sweetalert2';

const PurchaseModal = ({ closeModal }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cardOnFile'); // State to store selected payment method
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('delivery'); // State to store selected delivery method
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle change in payment method selection
    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    // Function to handle change in delivery method selection
    const handleDeliveryMethodChange = (method) => {
        setSelectedDeliveryMethod(method);
    };

    const handleRegisterClick = () => {
        // Check if user is not logged in
        if (localStorage.getItem('login') !== 'true') {
            // Show SweetAlert message
            Swal.fire({
                icon: 'info',
                title: 'You need to register or log in first!',
                text: 'To proceed with your purchase.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
            });
            navigate('/login');
        } else {
            // Perform other actions if needed
            // For example, show a message that the user is already logged in
            console.log("User is already logged in.");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-filter backdrop-blur-sm">
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>

            <div className="relative w-[90%] h-[90vh] bg-white rounded-lg shadow-lg py-2 px-2">
                <div className='flex items-center justify-between'>
                    <h2 className="text-xl font-bold mx-auto">Purchase Product</h2>
                    <button onClick={closeModal} className="p-2 text-[#000000] hover:text-[#010101] transition-all ease-in duration-300 focus:outline-none border-[#D8D8DA] border-2 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className='h-[74%] overflow-y-auto'>
                    <div className="mb-4 flex items-center gap-1">
                        <div className='my-2 flex flex-col gap-1 w-[65%]'>
                            <p className='font-semibold'>Items: $7.00</p>
                            <p className='font-semibold'>Shipping & handling: $2.00</p>
                            <p className='font-semibold'>Estimated Tax: $0.00</p>
                            <p className='font-semibold'>Order total:: $7.00</p>
                        </div>
                        <div className='my-2 flex flex-col gap-1 align-center w-2/5'>
                            <img src={ThumbnailProduct} alt="" />
                        </div>
                    </div>

                    <div className="">
                        <div className='my-2 flex flex-col gap-1 font-semibold'>
                            <p>Q-ty</p>
                            <div className="w-[70%]">
                                <Select label="Select Package">
                                    <Option>1 Package</Option>
                                    <Option>2 Package</Option>
                                    <Option>3 Package</Option>
                                </Select>
                            </div>
                        </div>

                        {/* Payment method */}
                        <nav className="flex min-w-[240px] flex-col gap-1 
                        p-0 font-sans text-base font-normal 
                        text-blue-gray-700 mt-5">
                            <label className="flex items-center w-full px-1 
                            py-0 cursor-pointer">
                                <Checkbox
                                    checked={selectedPaymentMethod === 'cardOnFile'}
                                    onChange={() => handlePaymentMethodChange('cardOnFile')}
                                    ripple={false}
                                    className="h-[20px] w-[20px] rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"

                                />
                                <span className="ml-0">Card on File</span>
                            </label>
                            <label className="flex items-center w-full px-1 
                            py-0 cursor-pointer">
                                <Checkbox
                                    checked={selectedPaymentMethod === 'payWithCrypto'}
                                    onChange={() => handlePaymentMethodChange('payWithCrypto')}
                                    ripple={false}
                                    className="h-[20px] w-[20px] rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                                />
                                <span className="ml-0">Pay with Crypto</span>
                            </label>
                            <label className="flex items-center w-full 
                            px-1 py-0 cursor-pointer">
                                <Checkbox
                                    checked={selectedPaymentMethod === 'payPal'}
                                    onChange={() => handlePaymentMethodChange('payPal')}
                                    ripple={false}
                                    className="h-[20px] w-[20px] rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                                />
                                <span className="ml-0">PayPal</span>
                            </label>
                        </nav>

                        {/* Delivery method */}
                        <nav className="flex min-w-[240px] flex-col gap-1 
                        p-0 font-sans text-base font-normal 
                        text-blue-gray-700 mt-5">
                            <label className="flex items-center w-full px-1 
                            py-0 cursor-pointer">
                                <Checkbox
                                    checked={selectedDeliveryMethod === 'delivery'}
                                    onChange={() => handleDeliveryMethodChange('delivery')}
                                    ripple={false}
                                    className="h-[20px] w-[20px] rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"

                                />
                                <span className="ml-0">Delivery (Friday, 5 PM)</span>
                            </label>
                            <label className="flex items-center w-full px-1 
                            py-0 cursor-pointer">
                                <Checkbox
                                    checked={selectedDeliveryMethod === 'pickup'}
                                    onChange={() => handleDeliveryMethodChange('pickup')}
                                    ripple={false}
                                    className="h-[20px] w-[20px] rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                                />
                                <span className="ml-0">Pickup</span>
                            </label>
                           
                        </nav>
                    </div>
                </div>

                <div className='absolute w-[96%] bottom-5 p-2'>
                    <div className='flex items-center justify-between flex-row'>
                        <ButtonCancel onClick={closeModal} />
                        <ButtonFarmDirect title='Purchase'
                        onClick={handleRegisterClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;
