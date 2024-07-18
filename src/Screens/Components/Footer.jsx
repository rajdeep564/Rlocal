import React from 'react'
import { Button } from '../../components/ui/button'

function Footer() {
  return (
    <div className='bg-[#F0F2F5]'>

        <div>
            <div className='absolute flex gap-10 rounded-lg  bg-white  py-4 px-8 shadow-lg shadow-blue-100 translate-x-[30%] -translate-y-[50%]'>
            <h1 className=' font-bold text-4xl'>Its very easy to make an appointment now</h1>
            <Button  className = " border border-maintheme bg-maintheme hover:bg-white hover:text-maintheme hover:border-maintheme hover:border" >Make Appointment</Button>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-10 p-24'>

            <div className='col-span-1 flex flex-col justify-start items-start gap-10'>
                <h1 className='text-3xl font-bold' >AppointX</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas non quos error molestiae accusantium autem adipisci sequi, hic sint maxime ab temporibus quas voluptatibus impedit laboriosam delectus doloremque cupiditate nostrum!</p>

            </div>

            <div className='col-span-1 flex flex-col justify-start items-start gap-10'>
                <h1 className='text-xl font-bold'>Usefull Links</h1>
                <div>
                <ul>Home</ul>
                <ul>Home</ul>
                <ul>Home</ul>
                </div>
            </div>

            <div className='col-span-1 flex flex-col justify-start items-start gap-10'>
                <h1 className='text-xl font-bold'>Contact</h1>
                <p>jsafasfhsflskf@mihirbakchod.com</p>

            </div>

        </div>
    </div>
  )
}

export default Footer
