import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-gray-800 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Stay Informed About Math and Code!
          </h1>
          <p className='text-lg'>
            Sign up for our newsletter and receive the latest updates, tips, and tricks about math
            and coding to enhance your skills and knowledge.
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter your email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Subscribe
            </button>
          </div>
          <p className='text-sm'>
            We value your privacy and data security. Please review our{' '}
            <a
              href='#'
              className='text-[#00df9a] hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Privacy Policy
            </a>{' '}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
