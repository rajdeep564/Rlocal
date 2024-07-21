import React from 'react'

const Input = ({title, placeholder ,handlechanges}) => {


  return (
    <div className='mt-10 ml-12'>
    <div className='flex w-72 justify-between'>
    <span className='text-RegisterTitle'>{title}</span>
    <span><img className='' src="public/questionmark.svg" /></span>
    </div>
    
    <input className='w-72 h-10 mt-2 p-3  border-spacing-5 border-2' type="text" placeholder={placeholder} onChange={handlechanges}/>
  </div>


  )
}

export default Input