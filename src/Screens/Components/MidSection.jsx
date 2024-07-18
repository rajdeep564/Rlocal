import React from 'react'

function MidSection() {
  return (
    <div className='flex flex-col items-center justify-end align-middle'>
                <div className='relative flex items-center'>
            <h4 className='font-bold text-xl text-maintheme'>Hassle free solution</h4>
            <img className='absolute ml-3 -top-2 left-full transform -translate-x-1/2 -translate-y-1/2' src="../../../public/assets/mid_section_lines.png" alt="" />
                </div>
      <h1 className='font-black text-5xl'>Easy Steps for booking Online appointment</h1>

      <div className='w-full px-16 my-32 flex gap-28 flex-col'>

    {/* 1 */}
    <div>
    <div className='flex items-center justify-start w-[60%] gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out 2s hover:shadow-lg hover:shadow-blue-200'>
    <div>
      <img className='h-44' src="assets/man1.svg" alt="" />
    </div>
    <div>
      <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>1</span> Find Your Service</p>
      <hr className='mt-6 mb-4 bg-gray-600 mx-5 h-[2px] rounded-full ' />
      <div className='ml-8'>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      </div>
    </div>
    
  </div>
  <img className='absolute translate-x-[25%] -translate-y-[15%] scale-150 pointer-events-none ' src="/assets/line1.svg" alt="" />
  </div>
  

    {/* 2 */}
    <div>

    
      <div className=' ml-auto flex items-center justify-end w-[60%]  gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out 2s hover:shadow-lg hover:shadow-blue-200'>
      <div>
        <img className='h-44' src="assets/man1.svg" alt="" />
      </div>
      <div>
        <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>1</span> Find Your Service</p>
        <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
        <div className='ml-8'>
          <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </div>
        
      </div>
      </div>
      <img className=" my-8 absolute -translate-y-[40%] translate-x-[70%] pointer-events-none" src="public/assets/line2.svg" alt="" />
      </div>

    {/* 3 */}
    <div className='flex items-center justify-start w-[68%] gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out 2s hover:shadow-lg hover:shadow-blue-200'>
    <div>
      <img className='h-52'  src="assets/man3.svg" alt="" />
    </div>
    <div>
      <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>1</span> Find Your Service</p>
      <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
      <div className='ml-8'>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      </div>
    </div>
  </div>

    {/* 4 */}
    <div className=' ml-auto flex items-center justify-end w-[68%]  gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out 2s hover:shadow-lg hover:shadow-blue-200'>
      <div>
        <img  className='h-52' src="assets/man4.svg" alt="" />
      </div>
      <div>
        <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>1</span> Find Your Service</p>
        <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
        <div className='ml-8'>
          <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </div>
        
      </div>
      </div>

      {/* 5 */}
      <div className='flex items-center justify-start w-[68%] gap-10 border border-serviceText p-5 rounded-2xl hover:scale-105 transition-all ease-in-out 2s hover:shadow-lg hover:shadow-blue-200'>
    <div>
      <img  className='h-52' src="assets/man5.svg" alt="" />
    </div>
    <div>
      <p className='text-3xl font-bold'><span className='bg-blue-100 px-4 py-1 rounded-full'>1</span> Find Your Service</p>
      <hr className='mt-6 mb-4 bg-gray-300 h-[2px] rounded-full ' />
      <div className='ml-8'>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li className='text-serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      </div>
    </div>
  </div>

        {/* maindivclose */}
      </div>
    
    </div>

    
  )
}

export default MidSection
