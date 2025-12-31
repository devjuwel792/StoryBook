import React from 'react';
import { GiTreeBranch } from 'react-icons/gi';


  const cardData = [
    {
      img : '/images/homepage/gradeLvl/🌈.png',
      title:'Grade 3',
      subTitle:'Confident Readers'
    },
    {
      img : '/images/homepage/gradeLvl/🚀.png',
      title:'Grade 4',
      subTitle:'Advanced Readers'
    },
    {
      img : '/images/homepage/gradeLvl/🌟.png',
      title:'Grade 5',
      subTitle:'Expert Readers'
    },
  ]

const Card = ({ data }) => {

  return (
    <div className="flex border-b-2 w-full border-x-2 p-4 my-7 px-8 rounded-xl shadow-md flex-col justify-center items-center gap-3">
     <img src={data?.img} alt="" />
      <h2 className="text-[24px] font-semibold">{data?.title}</h2>
      <p className="text-[16px]">{data?.subTitle}</p>
    </div>
  );
};

const GradeLevel = () => {
  return (
    <div className='py-12'>
      <p className="text-[36px] text-center text-black font-semibold">
        Choose Your Grade Level
      </p>
      <p className='text-center text-[20px] mt-1 text-[#4A5565]'>Pick your grade to see stories just right for you!</p>

      <div className="flex items-center justify-center px-24 mt-16 gap-4">
        {cardData.map((item) => (
          <Card key={item} data={item} />
        ))}
      </div>
    </div>
  );
};

export default GradeLevel;
