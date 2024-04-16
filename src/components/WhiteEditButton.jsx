import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import BlackPencil from '../assets/black-pencil.png';

const WhiteEditButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='w-[10px] h-[10px] bg-[#fff] 
      p-4 rounded-full text-[#000] my-2
                 flex flex-row justify-center items-center gap-3'
    >
      
      <FontAwesomeIcon icon={faPencilAlt} className='w-[13px] h-[13px]' />
    </button>
  );
};

export default WhiteEditButton;
