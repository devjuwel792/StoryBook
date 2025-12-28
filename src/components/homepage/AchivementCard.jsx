import React from 'react';
import { FaBook, FaPen, FaStar } from 'react-icons/fa6';
import { GoPeople } from 'react-icons/go';
import { IoBookOutline } from 'react-icons/io5';

const DuelCard = ({ data }) => {
    return (
          <div 
            className='flex w-[40vw] border-4 rounded-2xl p-8 gap-4'
            style={{
                background: data.backgroundColor,
                borderColor: `${data.borderColor}40` // Adding alpha (40 = 25% opacity)
            }}
        >
            <p 
                className='p-4 h-14 flex justify-center items-center rounded-xl' 
                style={{
                    background: data.iconBgColor
                }}
            >
                {data.icon}
            </p>
            <div className='space-y-2'>
                <h2 className='text-[30px] text-[#1E2939] font-semibold'>{data.text1}</h2>
                <p className='text-[#4A5565] text-[18px] px-1'>{data.text2}</p>

                <div className='space-y-1'>
                    {data.nestedText.map((item, index) => (
                        <div key={index} className='flex items-center gap-2 text-[#364153]'>
                            <FaStar className='text-yellow-300' /> 
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const AchievementCard = () => {

    const cardData = [
        {
            icon: <IoBookOutline className='text-white font-bold' size={28} />,
            iconBgColor: 'linear-gradient(180deg, #1F3A2B 0%, #98D8C8 100%)',
            backgroundColor: "linear-gradient(180deg, #E6F3FF 0%, #F0FFF4 100%)",
            borderColor: '#1F3A2B',
            text1: 'Read Amazing Stories',
            text2: 'Discover thousands of age-appropriate stories with our built-in dictionary to help you learn new words!',
            nestedText: [
                { text: 'Interactive word definitions' },
                { text: 'Progress tracking' },
                { text: 'Beautiful illustrations' },
            ]
        },
        {
            icon: <FaPen className='text-white font-bold' size={28} />,
            borderColor: '#FFBF00',
            iconBgColor: 'linear-gradient(180deg, #FFE87C 0%, #FFD700 100%)',
            backgroundColor: "linear-gradient(180deg, #FFF8E6 0%, #FFF0F5 100%)",
            text1: 'Write & Create',
            text2: 'Express yourself with our creative writing tools and share your stories with a safe community of young writers!',
            nestedText: [
                { text: 'Creative writing prompts' },
                { text: 'Safe sharing community' },
                { text: 'Illustration tools' },
            ]
        },
    ];

    return (
        <div className='bg-[#fff7ec] space-y-24 py-16'>
           <div className='flex gap-16 justify-center items-center'>
            {cardData.map((data, index) => (
                <DuelCard key={index} data={data} />
            ))}
           </div>

           <div
           style={{
            background: 'linear-gradient(90deg, #FFB6C1 0%, #E6E6FA 47.12%, #46785D 100%)'
           }}

           className='p-5 py-7 grid grid-cols-4 w-[83vw] rounded-xl shadow-xl items-center justify-center mx-auto  gap-6 justify-items-center'
           >
     {
        [1,2,3,4].map(items => (
                   <div className='flex flex-col justify-center items-center gap-3 text-white'>
                <GoPeople size={48} />
                <p className='text-[40px]'>
                    500+
                </p>
                <p className='text-[18px]'>Happy Readers</p>
            </div>
        ))
     }
           </div>

           <div className='flex flex-col justify-center items-center  gap-7 bg-[#FFFFFF] p-8 w-[83vw] mx-auto rounded-xl shadow-xl'>
            <h2 className='text-[36px]'>Ready to Start Your Reading Adventure? 🚀</h2>
            <p className='text-[20px] text-[#4A5565]'>Join thousands of kids learning to love reading and writing. Sign up now and get started for FREE!</p>

            <button
            className='text-[20px] px-20 text-white py-3 rounded-3xl'
            style={{
                background:'linear-gradient(270deg, #98D8C8 -0.1%, #1F3A2B 100.1%)'

            }}
            > Sign Up Free!</button>
           </div>
        </div>
    );
};

export default AchievementCard;