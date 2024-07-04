import React from 'react'

const profiles = () => {
  return (
    <>
        <ul className='newProfiles flex relative w-[6em] h-[2em] ml-2 mr-2 pointer-events-none'>
            <li className='absolute left-[0] border-2 border-slate-200 bg-[#007bff] rounded-full p-[0.5em] text-sm flex flex-col items-center justify-center font-lato'>GD</li>
            <li className='absolute left-[20px] border-2 border-slate-200 bg-[#6c757d] rounded-full p-[0.5em] text-sm flex flex-col items-center justify-center font-lato'>GD</li>
            <li className='absolute left-[40px] border-2 border-slate-200 bg-[#28a745] rounded-full p-[0.5em] text-sm flex flex-col items-center justify-center font-lato'>RS</li>
            <li className='absolute left-[60px] border-2 border-slate-200 bg-[#e83e8c] rounded-full p-[0.5em] text-sm flex flex-col items-center justify-center font-lato'>BS</li>
            <li className='absolute left-[80px] border-2 border-slate-200 bg-[#007bff] rounded-full p-[0.5em] text-sm flex flex-col items-center justify-center font-lato'>HB</li>
        </ul>
    </>
  )
}

export default profiles