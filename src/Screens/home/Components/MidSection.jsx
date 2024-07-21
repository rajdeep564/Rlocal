import React from 'react'

function MidSection() {
  return (
    <div className='flex flex-col items-center justify-center align-middle'>
                <div className='relative flex items-center'>
            <h4 className='font-bold text-xl text-maintheme'>Hassle free solution</h4>
            <img className='absolute ml-3 -top-2 left-full transform -translate-x-1/2 -translate-y-1/2' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2F3liens.png?alt=media&token=a2179943-4b00-46c1-b013-480cc77bed80" alt="" />
                </div>
      <h1 className='font-black text-5xl'>Easy Steps for booking Online appointment</h1>

      <div className='w-full px-16 my-32 flex gap-28 flex-col'>

    {/* 1 */}
    <div>
    <div className='flex items-center justify-start w-[60%] gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-blue-200'>
    <div>
      <img className='h-44' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fsteps1.svg?alt=media&token=d9520441-7687-4ace-8a2a-ddc16739b97a" alt="" />
    </div>
    <div>
      <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>1</span> Find Your Service</p>
      <hr className='mt-6 mb-4 bg-gray-600 mx-5 h-[2px] rounded-full ' />
      <div className='ml-8'>
        <li className='text-serviceText'>Browse Services: Explore categories to find what you need. 
 </li>
        <li className='text-serviceText'>Search: Use the search bar to quickly locate a specific service. </li>
        <li className='text-serviceText'>Filters: Apply filters for date, time, location, and more. </li>
      </div>
    </div>
    
  </div>
  <img className='absolute translate-x-[25%] -translate-y-[15%] scale-150 pointer-events-none ' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fline1.svg?alt=media&token=70bea29e-4322-4e3b-88e6-e7ff02c99fa2" alt="" />
  </div>
  

    {/* 2 */}
    <div>

    
      <div className=' ml-auto flex items-center justify-end w-[60%]  gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-blue-100'>
      <div>
        <img className='h-44' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fsteps2.svg?alt=media&token=1684c0c1-91c4-4380-9ad1-01e1d7757f18" alt="" />
      </div>
      <div>
        <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>2</span> Select Your Service Provider </p>
        <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
        <div className='ml-8'>
          <li className='text-serviceText'>View Profiles: Check out profiles and reviews of service providers. </li>
          <li className='text-serviceText'>Compare Options: Compare ratings, prices, and availability.</li>

        </div>
        
      </div>
      </div>
      <img className=" my-8 absolute -translate-y-[40%] translate-x-[70%] pointer-events-none" src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fline2.svg?alt=media&token=c0580855-679b-4c6d-858f-45cfa52428cf" alt="" />
      </div>

    {/* 3 */}
    <div>

    
    <div className='flex items-center justify-start w-[68%] gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-blue-100'>
    <div>
      <img className='h-52'  src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fsteps3.svg?alt=media&token=86487371-71f3-454b-a65a-738baf143f1f" alt="" />
    </div>
    <div>
      <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>3</span>  Choose Date and Time</p>
      <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
      <div className='ml-8'>
        <li className='text-serviceText'>Interactive Calendar: Select your preferred date and time from the provider’s calendar. </li>
        <li className='text-serviceText'>Real-Time Availability: See available slots in real-time.</li>

      </div>
    </div>
  </div>
  <img className=' absolute -translate-x-[20%] -translate-y-[25%] scale-150 pointer-events-none' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fline3.svg?alt=media&token=b8e34b7f-072c-4af5-b0c6-f50e19eed476" alt="" />
  </div>

    {/* 4 */}
    <div>

    
    <div className=' ml-auto flex items-center justify-end w-[68%]  gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-blue-100'>
      <div>
        <img  className='h-52' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fsteps4.svg?alt=media&token=1a7ad8bd-3846-4d97-b003-1f2206a09ccf" alt="" />
      </div>
      <div>
        <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>4</span>  Confirm Details </p>
        <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
        <div className='ml-8'>
          <li className='text-serviceText'>Review Selection: Double-check your chosen service, provider, date, and time. </li>
          <li className='text-serviceText'>Add Notes: Include any special requests or notes for the provider.</li>

        </div>
        
      </div>
      </div>
      <img className=' pointer-events-none absolute translate-x-[90%] scale-150  -translate-y-[20%] ' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fline4.svg?alt=media&token=d30cfe96-b7bd-4467-8099-05f4d4606032" alt="" />
      </div>

      {/* 5 */}
      <div className='flex items-center justify-start w-[68%] gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-blue-100'>
    <div>
      <img  className='h-52' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fsteps5.svg?alt=media&token=c07ea145-6bff-405b-adac-0c7191af0391" alt="" />
    </div>
    <div>
      <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>5</span>  Get Confirmation </p>
      <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
      <div className='ml-8'>
        <li className='text-serviceText'>Instant Confirmation: Receive an email or SMS confirmation of your booking. </li>
        <li className='text-serviceText'>Add to Calendar: Option to add the appointment to your personal calendar.</li>
      </div>
    </div>
  </div>

        {/* maindivclose */}
      </div>

      <div className='flex flex-col items-center justify-center align-middle'>
                <div className='relative flex items-center'>
            <h4 className='font-bold text-xl text-maintheme'>Fit for all service</h4>
            <img className='absolute ml-3 -top-2 left-full transform -translate-x-1/2 -translate-y-1/2' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2F3liens.png?alt=media&token=a2179943-4b00-46c1-b013-480cc77bed80" alt="" />
                </div>
      <h1 className='font-black text-5xl'>BookMySlot can serve almost any industrial segement</h1>

      <p className='text-[#5F718C] text-center px-16 py-6'>Our appointment booking system is fit for all service-based local businesses, multi-location enterprises, franchises, and more.</p>
      </div>

      {/* <main> */}
      <div className='grid grid-cols-6  gap-20 p-32 w-full'>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FSalon.svg?alt=media&token=5172859d-36c0-4ceb-a020-556da85b16fd" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Salon & beauty</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FBarber.png?alt=media&token=4bf09503-aa49-4d84-8316-c0934e7308d8" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Barber</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FSpa.png?alt=media&token=c53b0f79-bd39-4d00-8ca9-79a021ab16b1" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Spa</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FHealth-Wellness%20%5BOptimized%5D.png?alt=media&token=493f1dc0-e62b-4bd2-be7d-3fcd1f807681" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Health & Wellness</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FFitness-Sports%20%5BOptimized%5D.png?alt=media&token=3f0cdf76-7693-4954-aaa9-901b7ef558d4" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Fitness & sports</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fprofessional-services%20%5BOptimized%5D.png?alt=media&token=1db6fd84-b4ef-4227-bdd6-d7309d8934cf" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Professional Service</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Ftutoring%20%5BOptimized%5D.png?alt=media&token=8e70f4f8-3864-4999-be6f-afa9010319f4" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Tutoring Service</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Feducation-and-non-profits%20%5BOptimized%5D.png?alt=media&token=9b598966-3231-49da-a26b-5422e2763868" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Education & non-profits</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FBankingFinance.png?alt=media&token=b4f50bcb-9ab4-4588-a4fe-ba5af9d60f2e" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Banking & finance </p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fretail%20%5BOptimized%5D.png?alt=media&token=a24f2535-c478-4c04-8f09-25b868d07d3b" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Retail</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FReal-Estate%20%5BOptimized%5D.png?alt=media&token=fa58a202-d0b3-443e-b44e-a3cf8ff8ed3f" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Real Estate</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fcommunities-and-facilities%20%5BOptimized%5D.png?alt=media&token=12cf7f0e-b1dc-4133-9486-19686f77a0e2" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Communities & Facilities </p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2FGovernment-Public-sector%20%5BOptimized%5D.png?alt=media&token=0af45593-f24d-413e-9d3d-fd7552b88b37" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Goverment & public sector</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fmedical-office%20%5BOptimized%5D.png?alt=media&token=910d2f61-a743-4a8a-a591-602cbbd08495" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Medical Office</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fpet-services%20%5BOptimized%5D.png?alt=media&token=01c6a177-913e-46e3-be71-67a23c3119cc" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Pet service</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fhome-services-and-cleaning%20%5BOptimized%5D.png?alt=media&token=90f93db7-8abc-4477-af1f-6d33e0b17247" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Home Service & Cleaning</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fbusiness-operations-and-team%20%5BOptimized%5D.png?alt=media&token=de450134-e941-4c44-ad45-8791861464e9" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Business Operation</p>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <img className='h-16 my-3 mx-3' src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Fautomotive%20%5BOptimized%5D.png?alt=media&token=27fa1b27-359f-499a-b996-8ad52ea1b3ec" alt="" />
          <p className=' py-3 font-light text-[#5F718C]'>Automotive</p>
        </div>
        
          {/* grid close */}
      </div>
      <div className='flex flex-col items-center justify-center align-middle'>
                <div className='relative flex items-center'>
            <h4 className='font-bold text-xl text-maintheme'>Hassle free solution</h4>
            <img className='absolute ml-3 -top-2 left-full transform -translate-x-1/2 -translate-y-1/2' src="assets/mid_section_lines.png" alt="" />
                </div>
      <h1 className='font-black text-5xl text-center'>Flexible Booking Settings alow you to have complete control over your shedule</h1>
      <div className='grid grid-cols-5 gap-6 p-20 w-full '>

        <div className='flex flex-col items-center gap-10 justify-center'>
          <img   src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Ffeatures1.svg?alt=media&token=e3c1bf2b-d41c-49ac-bfcd-d7ba09fb6d05" alt="" />
          <p className=' font-medium text-pretty text-[#5F718C]'>Your time matters. Connect with reputable and verified providers for a hassle-free appointment experience. Our platform offers unmatched flexibility and convenience.</p>
        </div>

        <div className='flex flex-col items-center gap-10 justify-center'>
          <img   src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Ffeatures2.png?alt=media&token=1f4b9bbf-48b6-429d-8da6-be6540bfc562" alt="" />
          <p className=' font-medium text-pretty text-[#5F718C]'>Effortlessly book appointments with top-rated, legal service providers. Our platform ensures timely and reliable scheduling with the flexibility you need.</p>
        </div>

        <div className='flex flex-col items-center gap-10 justify-center'>
          <img   src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Ffeatures3.png?alt=media&token=ab74205d-36e9-438d-b81d-2a37441cdc78" alt="" />
          <p className=' font-medium text-pretty text-[#5F718C]'>Your appointments are just a click away with our trusted service providers. Enjoy a secure and flexible platform that protects your data while ensuring timely and reliable bookings.</p>
        </div>

        <div className='flex flex-col items-center gap-10 justify-center'>
          <img   src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Ffeatures4.png?alt=media&token=847c53a8-c009-4887-b77f-d3483e8c842b" alt="" />
          <p className=' font-medium text-pretty text-[#5F718C]'>Effortlessly book appointments with top-rated, legal service providers. Our platform ensures timely and reliable scheduling with the flexibility you need.</p>
        </div>

        <div className='flex flex-col items-center gap-10 justify-center'>
          <img   src="https://firebasestorage.googleapis.com/v0/b/appointx-badae.appspot.com/o/website%20images%2Ffeatures5.png?alt=media&token=de359640-0396-495b-87b2-0867342f7550" alt="" />
          <p className=' font-medium text-pretty text-[#5F718C]'>Connect with the best and most trusted service providers. Our user-friendly platform offers on-time bookings and flexible scheduling to fit your lifestyle.</p>
        </div>

        

      </div>
      
  
      </div>
    
    </div>

    
  )
}

export default MidSection
