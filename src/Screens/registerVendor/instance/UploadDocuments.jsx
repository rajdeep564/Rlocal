import React from 'react'

const UploadDocuments = ({title}) => {
  return (
    <div className='ml-32 mt-10'>
        <span className='text-xl font-bold'>{title}</span>
        <div className='w-[400px] h-64  bg-white mt-2 rounded-xl'>
            <div className='flex justify-center'>
            <img className='mt-20 w-12' src="public/file-add.svg" alt="" />

            </div>

            <div className='flex justify-center flex-col '>
            <span className='flex justify-center text-l font-bold'>Click to Upload</span>
            <img className= 'w-24 h-10 ml-40 mt-10' src="public/Frame 2610596.svg" />
            <button className='bg-blue-500 h-10 text-white font-semibold'>Upload</button>
            </div>
         
            
           
        </div>
    </div>
  )
}

export default UploadDocuments