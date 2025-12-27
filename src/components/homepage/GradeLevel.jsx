import React from 'react';
import { GiTreeBranch } from 'react-icons/gi';

const Card = ({ grade }) => {
  return (
    <div className="flex border-b-2 border-x-2 p-4 px-8 rounded-xl shadow-md flex-col justify-center items-center gap-3">
      <GiTreeBranch className="bg-green-400" size={24} />
      <h2 className="text-[24px] font-semibold">Grade {grade}</h2>
      <p className="text-[16px]">asdj asdjs</p>
    </div>
  );
};

const GradeLevel = () => {
  return (
    <div className='pt-10'>
      <p className="text-[36px] text-center text-black font-semibold">
        Choose Your Grade Level
      </p>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <div className="flex items-center justify-center mt-16 gap-4">
        {[1, 2, 3, 4,5].map((item) => (
          <Card key={item} grade={item} />
        ))}
      </div>
    </div>
  );
};

export default GradeLevel;
