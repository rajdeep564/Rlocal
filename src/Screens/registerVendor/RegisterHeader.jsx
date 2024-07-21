import React from 'react'

const RegisterHeader = () => {
  return (
    <>
        <div className='flex justify-between'>
            <a className='text-3xl ml-20 mt-10'>AppointX</a>
            <div className='flex mr-10 mt-10 gap-2'><span className='text-nowrap text-s mt-3'>Already a member?</span> <img className='w-3 align-middle mt-3' src="public/Vector.svg"  /></div>
        </div>

        <div className='flex justify-between mt-8'>
            <span className='text-5xl font-semibold ml-20 '>Input Your <br></br> Information</span>
            <p className='flex flex-wrap mr-32'>We need you to help us with some basic information for your account creation. Here are our  terms and conditions. <br></br> Please read them carefully. </p>
        </div>




    
    </>
  )
}

export default RegisterHeader