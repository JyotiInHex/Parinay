import React from 'react'

const About = () => {
  return (
    <div className='w-full h-auto mt-[5em] mb-7 group bg-[#E91E63] p-8 rounded-3xl'>
        <div className='text-xl text-white font-opensans font-medium underline transition-all'>(02) About</div>
        <div className='grid grid-cols-2 gap-32 h-full'>
          <div className='self-end w-full h-fit text-base text-white text-justify font-lato font-normal tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis quasi quis vero illum dolor? Veniam error fugit accusamus distinctio corporis natus delectus nesciunt ipsa omnis illo, voluptate, incidunt magnam!</div>
          <div className='flex flex-col gap-12 items-start'>
            <h1 className='w-ful h-auto text-3xl text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus illum omnis asperiores amet similique quos et assumenda quam explicabo facere? Quis voluptas animi fugiat eum assumenda eligendi quidem unde non?</h1>
            <button>Hi</button>
          </div>
        </div>
    </div>
  )
}

export default About