import React from 'react'

const ButtonFarmDirect = ({title, onClick}) => {
  return (
    <button 
        onClick={onClick}
        className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2'>
    {title}
  </button>
  )
}

export default ButtonFarmDirect