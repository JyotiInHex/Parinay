import React from 'react'

const Features = () => {
  return (
    <>
        <div className='flex flex-col w-full h-auto mt-10'>
            <h2 className='max-w-[10em] mb-8 text-7xl text-left font-merriweather font-light leading-snug'>Key Features to Enhance Your Dating Experience</h2>
            <div className='self-end flex justify-end items-center gap-4 mb-10'>
              <div className="flex flex-col gap-2 bg-white w-[22%] h-auto min-h-[22.5em] p-5 border-2 border-white rounded-3xl transition-all cursor-default hover:border-[#E91E63] hover:text-[#E91E63] hover:-translate-y-8">
                <i className='ri-heart-fill text-2xl text-[#E91E63]'></i>
                <h3 className='text-xl font-semibold font-merriweather'>Matching</h3>
                <p className='text-base'>Our advanced matching algorithm ensures you find compatible partners and profile data, enhancing the likelihood of meaningful connections. By analyzing interests, values and lifestyle choices, we match you with individuals who share your vision for the future. Start your journey towards finding a compatible life partner today.</p>
              </div>
              <div className="flex flex-col gap-2 bg-white w-[22%] h-auto min-h-[22.5em] p-5 border-2 border-white rounded-3xl transition-all cursor-default hover:border-[#007BFF] hover:text-[#007BFF] -translate-y-8">
                <i className='ri-message-3-fill text-2xl text-[#007BFF]'></i>
                <h3 className='text-xl font-semibold font-merriweather'>Chatting</h3>
                <p className='text-base'>Our secure and user-friendly chat feature allows you to communicate freely and get to know potential matches in a safe environment. With real-time messaging and intuitive design, our chat system makes it easy to connect and build rapport Enjoy meaningful conversations that can lead to lasting relationships.</p>
              </div>
              <div className="flex flex-col gap-2 bg-white w-[22%] h-auto min-h-[22.5em] p-5 border-2 border-white rounded-3xl transition-all cursor-default hover:border-[#4CAF50] hover:text-[#4CAF50] hover:-translate-y-8">
                <i className='ri-shield-check-fill text-2xl text-[#4CAF50]'></i>
                <h3 className='text-xl font-semibold font-merriweather'>Safety</h3>
                <p className='text-base'>We prioritize your safety with robust verification processes and privacy settings, ensuring your personal information remains protected. Our team works tirelessly to create a safe space where you can interact confidently. <br></br>Trust Parinay.com to safeguard your journey towards finding true love.</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Features