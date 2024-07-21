import React from 'react'

const Phonenumber = ({handleonchange}) => {
  return (
    <div className='flex mt-2'>
        <label className='w-14 h-12 border-2 flex justify-items-center align-center p-3'>+91</label>
        <input className="w-56 h-12 p-3  border-spacing-5 border-2" type="text" placeholder='000 000 0000' onChange={handleonchange} />
    </div>
  )
}

export default Phonenumber