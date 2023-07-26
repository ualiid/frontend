import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const cardData = [
  {
    imgSrc: Single,
    title: 'Math Wizard',
    price: '$149',
    features: ['Unlock the Power of Math in Coding', 'Get Access to Exclusive Math Libraries', 'Explore Mathematical Algorithms'],
    buttonColor: '#00df9a',
  },
  {
    imgSrc: Double,
    title: 'Coding Guru',
    price: '$199',
    features: ['Dive Deep into Coding Concepts', 'Master Data Structures and Algorithms', 'Develop Advanced Coding Projects'],
    buttonColor: 'black',
  },
  {
    imgSrc: Triple,
    title: 'Math + Code Pro',
    price: '$249',
    features: ['Combine Math and Coding for Cutting-edge Solutions', 'Access to Advanced AI and Machine Learning Tools', 'Create Innovative Applications'],
    buttonColor: '#00df9a',
  },
];

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'
          >
            <img
              className='w-20 mx-auto mt-[-3rem] bg-white'
              src={card.imgSrc}
              alt='/'
            />
            <h2 className='text-2xl font-bold text-center py-8'>{card.title}</h2>
            <p className='text-center text-4xl font-bold'>{card.price}</p>
            <div className='text-center font-medium'>
              {card.features.map((feature, i) => (
                <p key={i} className='py-2 border-b mx-8 mt-8'>
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-${card.buttonColor} ${
                card.buttonColor === 'black' ? 'text-[#00df9a]' : 'text-black'
              } w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Start Journey
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
