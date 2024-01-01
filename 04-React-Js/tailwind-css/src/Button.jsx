import React from 'react'

const Button = ({name , func}) => {
    return (
        <>
            <button className='px-4 py-1 rounded bg-blue-400 text-white hover:bg-blue-200 hover:text-black' onClick={func}>{name}</button>
        </>
    )
}

export default Button