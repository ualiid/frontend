import React from 'react';
import { FaReact, FaCode, FaDatabase, FaLaptopCode } from 'react-icons/fa';

const footerSections = [
  {
    title: 'Solutions',
    items: ['Data Science', 'Machine Learning', 'Web Development', 'App Development'],
  },
  {
    title: 'Support',
    items: ['FAQs', 'Documentation', 'Tutorials', 'Community'],
  },
  {
    title: 'Company',
    items: ['About Us', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MathCoders.</h1>
        <p className='py-4'>
          Welcome to MathCoders, where we integrate the power of mathematics and coding to build innovative solutions and applications.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaReact size={30} />
          <FaCode size={30} />
          <FaDatabase size={30} />
          <FaLaptopCode size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between gap-2 mt-6'>
        {footerSections.map((section, index) => (
          <div key={index}>
            <h6 className='font-medium text-gray-400'>{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className='py-2 text-sm'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
