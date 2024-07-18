import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from '../../components/ui/button';

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 py-28'>
      <div className='lg:col-span-1 col-span-2'>
        <div className='flex flex-col lg:mr-20'>
          <h2 className='text-5xl text-primarytext font-bold leading-tight'>
            Discover, Click, Done
            <br />
            Your <span className='text-[#0058E5]'>Appointment</span> Awaits!
          </h2>
          <p className='text-xl font-normal text-pretty py-8'>
            Book appointments with ease and efficiency on our user-friendly platform. Whether you need a doctor's visit, a spa session, or a business meeting, our streamlined booking system ensures a hassle-free experience. Stay organized and never miss an appointment again!
          </p>
          <div className='flex gap-5 '>
          <Button className = " border border-maintheme bg-maintheme hover:bg-white hover:text-maintheme hover:border-maintheme hover:border">Make Appointment</Button>
          <Button  className = " border border-maintheme bg-maintheme hover:bg-white hover:text-maintheme hover:border-maintheme hover:border" >Serve Service</Button>
          </div>
          
        </div>
      </div>
      <div className='lg:col-span-1 col-span-2'>
        <div className='flex justify-around xs:justify-center  md:flex-row xs:flex-col'>
          <div
            className={`transition-all ease-in-out 1s xs:align-middle ${isHovered ? 'shadow-blue-200 scale-105 shadow-2xl' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Card className="md:w-[130%] xs:w-[80%] p-6 bg-white rounded-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-blue-600">Book Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name*</Label>
                  <Input id="name" placeholder="Name*" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" placeholder="example@yourdomain.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service*</Label>
                  <Input id="service" placeholder="Choose Service" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time*</Label>
                  <Input id="time" placeholder="4.00 - 10.00 available" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full border border-maintheme bg-maintheme hover:bg-white hover:text-maintheme hover:border-maintheme hover:border">Book Appointment</Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <img
              className={`w-80 xs:hidden lg:block  mt-6 transition-all ease-in-out 3s ${isHovered ? 'translate-x-24 translate-y-11' : ''}`}
              src="assets/Calendar.png"
              alt="calendar image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
