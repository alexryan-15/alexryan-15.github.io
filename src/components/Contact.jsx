import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-grap-300'>Contact</p>
                <p className='text-grap-300 pt-4'>Submit the form below or email at alexryan1717@hotmail.com</p>
            </div>
            <input className='p-1 bg-[#ccd6f6] text-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact