import React from 'react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { FiShield, FiTarget } from 'react-icons/fi';
import { GoPeople } from 'react-icons/go';
import { LuBrain } from 'react-icons/lu';

const Header = ({ heading, subheading }) => {
  return (
    <div className='flex justify-center items-center flex-col mb-20'>
      <p className='text-[48px] text-center'>{heading}</p>
      <p className='text-[20px] text-[#4A5565] text-center mt-4 max-w-2xl'>
        {subheading}
      </p>
    </div>
  );
};

const Card = ({ cardData, position }) => {
  return (
    <div className={`flex justify-center ${position==='left'? 'flex-row-reverse': ''}  items-start mt-20 gap-9`}>
      <div className="grid grid-cols-1 gap-4 w-[40vw]">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="flex p-5  rounded-md shadow-xl gap-4 w-full"
            style={{
              background: item.backgroundColor,
            }}
          >
            <div
              className="p-2 h-12 w-12 flex items-center justify-center rounded-xl flex-shrink-0"
              style={{
                background: 'linear-gradient(180deg, #87CEEB 0%, #98D8C8 100%)',
              }}
            >
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="text-[20px] font-semibold">
                {item.text1}
              </h3>
              <p className="text-[16px] text-[#4A5565] mt-2">
                {item.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Image container that matches the cards height */}
      <div className="w-[40vw] h-full">
        <img 
          className='w-full h-full object-cover rounded-xl shadow-md' 
          src="/images/homepage/img1.png" 
          alt="Children reading books" 
        />
      </div>
    </div>
  );
};

const AboutCard = () => {
  const cards1 = [
    {
      icon: <GoPeople size={30} />,
      text1: 'Parent & Teacher Dashboards',
      text2: 'Monitor student progress, assign reading goals, and track comprehension with detailed analytics.',
      backgroundColor: 'linear-gradient(180deg, #FFF8E6 0%, #FFF0F5 100%)'
    },
    {
      icon: <LuBrain size={30} />,
      text1: 'Research-Based Learning',
      text2: 'Our curriculum aligns with Common Core standards and uses proven literacy development methods.',
      backgroundColor: 'linear-gradient(180deg, #E6F3FF 0%, #F0FFF4 100%)'
    },
    {
      icon: <AiTwotoneThunderbolt size={30} />,
      text1: 'Adaptive AI Technology',
      text2: 'Smart algorithms adjust difficulty and recommend stories based on each childs unique learning pace.',
      backgroundColor: 'linear-gradient(180deg, #FFF0F5 0%, #E6F3FF 100%)'
    },
    {
      icon: <FiShield size={30} />,
      text1: 'Safe & Secure Environment',
      text2: 'COPPA compliant platform with age-appropriate content filtering and privacy protection.',
      backgroundColor: 'linear-gradient(180deg, #F0FFF4 0%, #FFF8E6 100%)'
    },
  ];
  const cards2 = [
    {
      icon: <FiTarget  size={30} />,
      text1: 'Parent & Teacher Dashboards',
      text2: 'Monitor student progress, assign reading goals, and track comprehension with detailed analytics.',
      backgroundColor: 'linear-gradient(180deg, #FFF8E6 0%, #FFF0F5 100%)'
    },
    {
      icon: <LuBrain size={30} />,
      text1: 'Research-Based Learning',
      text2: 'Our curriculum aligns with Common Core standards and uses proven literacy development methods.',
      backgroundColor: 'linear-gradient(180deg, #E6F3FF 0%, #F0FFF4 100%)'
    },
    {
      icon: <AiTwotoneThunderbolt size={30} />,
      text1: 'Adaptive AI Technology',
      text2: 'Smart algorithms adjust difficulty and recommend stories based on each childs unique learning pace.',
      backgroundColor: 'linear-gradient(180deg, #FFF0F5 0%, #E6F3FF 100%)'
    },
    {
      icon: <FiShield size={30} />,
      text1: 'Safe & Secure Environment',
      text2: 'COPPA compliant platform with age-appropriate content filtering and privacy protection.',
      backgroundColor: 'linear-gradient(180deg, #F0FFF4 0%, #FFF8E6 100%)'
    },
  ];

  return (
    <div className=' flex  flex-col-reverse '>
        {/* section 2 */}
    <div
    className='py-16 pb-28'
    style={{
        background: 'linear-gradient(180deg, #fffefe 0%, #fff8ef 100%)'

    }}
    >
          <Header 
        heading={'Support Your Reading Journey 📚'} 
        subheading={'We provide personalized tools and features to help every child become a confident, lifelong reader!'} 
      />
      <Card  cardData={cards1} />
    </div>
{/* section 2 */}

<div className=' py-16 pb-28'
 style={{
        background: 'linear-gradient(180deg, #E6F3FF 0%, #F0FFF4 100%)'

    }}
>
      <Header 
        heading={'Support Your Reading Journey 📚'} 
        subheading={'We provide personalized tools and features to help every child become a confident, lifelong reader!'} 
      />
      <Card position={'left'} cardData={cards1} />
</div>

    </div>
  );
};

export default AboutCard;