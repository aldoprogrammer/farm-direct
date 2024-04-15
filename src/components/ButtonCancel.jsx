import React from 'react'

const ButtonCancel = ({ onClick }) => {
    return (
        <button className='w-fit border-[#D8D8DA] 
    border-2 p-4 text-[#000] rounded-lg' onClick={onClick}>
            Cancel
        </button>
    )
}

export default ButtonCancel