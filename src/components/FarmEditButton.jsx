import React from 'react'
import PencilIcon from '../assets/pencilIcon.png';

const FarmEditButton = ({handleClick}) => {
  return (
    <button
        onClick={handleClick}
            className='w-fit bg-[#65A30D] p-4
            rounded-full text-[#FFFFFF] my-2
        flex flex-row items-center gap-3'>
            <img src={PencilIcon} alt="" className='w-4 h-4' />
          </button>
  )
}

export default FarmEditButton