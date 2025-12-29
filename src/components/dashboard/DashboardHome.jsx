import React, { useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { FaBook, FaPenNib, FaTrophy, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { FaArrowRight, FaBell } from "react-icons/fa6";
import Reusable_Modal from "../reusable_components/Reusable_Modal";

const DashboardHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const quickActions = [
    {
      title: "Library",
      subtitle: "Find new books",
      bg: "linear-gradient(90deg, #FFB6C1 0%, #FFDAB9 100%)",
      icon: <FaBook size={20} />,
      link: "/library"
    },
    {
      title: "My Stories",
      subtitle: "Write & create",
      bg: "linear-gradient(90.14deg, #FFE87C 1.43%, #FFDAB9 99.13%)",
      icon: <FaPenNib size={20} />
    },
    {
      title: "Achievements",
      subtitle: "View progress",
      bg: "linear-gradient(89.85deg, #E6E6FA 0.12%, #98D8C8 99.87%)",
      icon: <FaTrophy size={20} />,
      link: "/achivement"
    },
    {
      title: "Profile",
      subtitle: "Your info",
      bg: "linear-gradient(90deg, #98D8C8 0%, #87CEEB 100%)",
      icon: <FaUser size={20} />,
      link: "/profile"
    }
  ];

  const stats = [
    {
      value: "12",
      label: "Books Read",
      borderColor: "#FFE87C4D",
      textColor: "#87CEEB",
      nestedLocation:'bookmarks'
    },
    {
      value: "248",
      label: "New Words",
      borderColor: "#98D8C84D",
      textColor: "#98D8C8",
       nestedLocation:'wordCount'
    },
    {
      value: "7",
      label: "Badges Earned",
      borderColor: "#FFB6C14D",
      textColor: "#FFB6C1",
       nestedLocation:'badges'
    }
  ];

  const recentStories = [
    {
      id: 1,
      title: "Demo Story",
      progress: 48,
      image: "https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Demo Story",
      progress: 48,
      image: "https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Demo Story",
      progress: 48,
      image: "https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      <div className="w-[80vw] mx-auto p-24">
        {/* Header */}
        <header className="mb-8 flex justify-between w-full ">
          <h2 className="text-2xl font-semibold text-gray-800">
            ☀️ Hi, Emma! <span className="ml-1">👋</span>
          </h2>
          <FaBell onClick={()=> setIsModalOpen(true)} size={20} />
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Continue Reading */}
          <div className="lg:col-span-2">
            <ContinueReadingCard
              title="The Magical Forest"
              progress={45}
              image="https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            {/* Recent Stories Section */}
            <div className="mt-6">
             
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentStories.map((story) => (
                  <RecentStoryCard
                    key={story.id}
                    title={story.title}
                    progress={story.progress}
                    image={story.image}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {quickActions.map((action, index) => (
              <QuickActionCard
                key={index}
                title={action.title}
                subtitle={action.subtitle}
                bg={action.bg}
                icon={action.icon}
                link={action.link}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              borderColor={stat.borderColor}
              textColor={stat.textColor}
              nestedLocation={stat.nestedLocation}
            />
          ))}
        </div>
      </div>
      <Reusable_Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} nestedLocation={'notification'} location={'notification'} />
    </section>
  );
};

/* ------------------ Internal Components ------------------ */

const ContinueReadingCard = ({ title, progress, image }) => (
<div>
    <div className="lg:col-span-2 bg-white border-[#87CEEB4D]/40 border-4 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row ">
    <div className="">
      <p className="flex gap-3 mb-3 text-[24px] justify-center font-semibold items-center text-[#1E2939]">
        <IoBookOutline className="text-blue-500 mt-1" size={22} /> Continue Reading
      </p>
      <img
        src={image}
        alt={title}
        className="w-full md:w-48 h-[200px] object-cover rounded-xl shadow"
      />
    </div>

    <div className="flex-1 pr-8 mt-12">
      <h3 className="text-[24px] font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 w-96 mb-4">
        You're doing great! Keep reading to discover what happens next.
      </p>

      <div className="mt-8">
        <ProgressBar value={progress} />
      </div>

      <button
        className="mt-9 inline-flex items-center gap-2 rounded-full px-14 py-3 text-sm font-medium text-white hover:opacity-90 transition"
        style={{
          background: 'linear-gradient(90deg, #213C2D 0%, #98D8C8 99.91%)'
        }}
      >
        Continue Reading →
      </button>
    </div>
{/*  */}


  </div>

  
</div>
);

const RecentStoryCard = ({ title, progress, image }) => (
  <div className="bg-white rounded-xl shadow-sm border-2 border-[#87CEEB4D] p-4 hover:shadow-md transition-shadow">
    <div className="flex gap-3">
      <img 
        className="w-16 h-16 object-cover rounded-lg" 
        src={image} 
        alt={title} 
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">Your Progress {progress}%</p>
        <button className="mt-2 flex items-center gap-1 text-sm font-medium text-white px-4 py-1 rounded-3xl hover:text-[#98D8C8] transition"
          style={{
          background: 'linear-gradient(90deg, #213C2D 0%, #98D8C8 99.91%)'
        }}
        >
          Reading <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ value }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1 text-xs text-gray-500">
      <span>Your Progress</span>
      <span>{value}%</span>
    </div>
    <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
      <div
        className="h-full rounded-full bg-[#213C2D] transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const QuickActionCard = ({ title, subtitle, bg, icon,link }) => (
  <Link
    to={link}
    className="rounded-2xl p-5 text-gray-800 cursor-pointer hover:scale-[1.02] transition-transform shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),_0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
    style={{ background: bg }}
  >
    <div className="flex items-center gap-2">
      <p className="bg-[#FFFFFFCC]/80 p-3 rounded-3xl">
        {icon}
      </p>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  </Link>
);

const StatCard = ({ value, label, borderColor, textColor,nestedLocation }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


  return (
  <div
  onClick={()=> setIsModalOpen(true)}
    className="rounded-2xl p-6 text-center shadow-sm border-4 bg-white"
    style={{
      borderColor: borderColor,
      color: textColor,
    }}
  >
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="mt-1 text-sm text-gray-500">{label}</p>
      <Reusable_Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} nestedLocation={nestedLocation} location={'notification'} />
  </div>
);
}

export default DashboardHome;