import React from 'react'
import { Button } from '../../../components/ui/button'

function Footer() {
  return (
    <div className='bg-[#F0F2F5]'>

        <div>
            <div className='absolute flex gap-10 rounded-lg  bg-white  py-4 px-8 shadow-lg shadow-blue-100 translate-x-[30%] -translate-y-[50%]'>
            <h1 className=' font-bold text-4xl'>Its very easy to make an appointment now</h1>
            <Button  className = " border border-maintheme bg-maintheme hover:bg-white hover:text-maintheme hover:border-maintheme hover:border" >Make Appointment</Button>
            </div>
        </div>


    <div className="w-auto bg-footerBackgroundColor flex align-center p-20 justify-center ">
    <div className="">
      <a className='text-4xl font-semibold '>AppointX</a>
      <p className='w-80 text-xs pt-2 text-DescriptionColor'>Effortlessly book doctor visits, spa sessions, or business meetings on our user-friendly platform. Stay organized and never miss an appointment with our streamlined booking system!</p>
    </div>

    <div className="ml-20">
      <a className='text-2xl font-semibold'>Usefull Links</a>
      <ul>
      <li className='text-DescriptionColor pt-2'>Home</li>
      <li className='text-DescriptionColor pt-2'>Service</li>
      <li className='text-DescriptionColor pt-2'>Blog</li>
      <li className='text-DescriptionColor pt-2'>About</li>
      </ul>
      
    </div>

    <div className="ml-32">
      <a className='text-2xl font-semibold'>Contact</a>
      <p className='text-DescriptionColor'>appointx@gmail.com</p>
    </div>
    </div>
    </div>
  )
}

export default Footer
