import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import {
  IoTrophyOutline,
  IoFlameOutline,
  IoBookOutline,
  IoFlashOutline,
  IoCalendarOutline,
  IoLanguageOutline,
  IoDiamondOutline,
  IoRocketOutline,
  IoArrowBack,
} from "react-icons/io5";
import Reusable_Modal from "../../../reusable_components/Reusable_Modal";
import { useNavigate } from "react-router";

const Achievement = () => {
const navigate = useNavigate()

  const statsData = [
    { 
      id: 1, 
      value: "12", 
      label: "Books Read", 
      icon: <IoBookOutline />,
      iconBg: "linear-gradient(180deg, #87CEEB 0%, #98D8C8 100%)",
      borderColor: "#FFE87C4D"
    },
    { 
      id: 2, 
      value: "248", 
      label: "New Words", 
      icon: <IoLanguageOutline />,
      iconBg: "linear-gradient(180deg, #FFB6C1 0%, #FF69B4 100%)",
      borderColor: "#98D8C84D"
    },
    { 
      id: 3, 
      value: "7", 
      label: "Badges Earned", 
      icon: <IoTrophyOutline />,
      iconBg: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
      borderColor: "#FFB6C14D"
    },
    { 
      id: 4, 
      value: "15", 
      label: "Days Streak", 
      icon: <IoFlameOutline />,
      iconBg: "linear-gradient(180deg, #FF6B6B 0%, #FF8E53 100%)",
      borderColor: "#87CEEB4D"
    },
  ];

  const badgesData = [
    {
      id: 1,
      icon: <IoBookOutline />,
      title: "Word Master",
      description: "Learned 100 new words",
      points: "250 XP",
      iconBg: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
      shadowColor: "#FFD70080",
      status: "earned",
    },
    {
      id: 2,
      icon: <IoFlashOutline />,
      title: "Speed Reader",
      description: "Read 10 books in a month",
      points: "150 XP",
      iconBg: "linear-gradient(180deg, #87CEEB 0%, #98D8C8 100%)",
      shadowColor: "#87CEEB80",
      status: "earned",
    },
    {
      id: 3,
      icon: <IoFlameOutline />,
      title: "Daily Reader",
      description: "30 days reading streak",
      points: "200 XP",
      iconBg: "linear-gradient(180deg, #FF6B6B 0%, #FF8E53 100%)",
      shadowColor: "#FF6B6B80",
      status: "earned",
    },
    {
      id: 4,
      icon: "✍️",
      title: "Creative Writer",
      description: "Wrote 5 original stories",
      points: "175 XP",
      iconBg: "linear-gradient(180deg, #9D4EDD 0%, #7B2CBF 100%)",
      shadowColor: "#9D4EDD80",
      status: "earned",
    },
    {
      id: 5,
      icon: "📚",
      title: "Story Explorer",
      description: "Completed 20 stories",
      points: "125 XP",
      iconBg: "linear-gradient(180deg, #4CAF50 0%, #2E7D32 100%)",
      shadowColor: "#4CAF5080",
      status: "earned",
    },
    {
      id: 6,
      icon: <IoDiamondOutline />,
      title: "Vocabulary Expert",
      description: "Mastered 500 words",
      points: "300 XP",
      iconBg: "linear-gradient(180deg, #FF4081 0%, #C2185B 100%)",
      shadowColor: "#FF408180",
      status: "earned",
    },
    {
      id: 7,
      icon: <IoCalendarOutline />,
      title: "Perfect Month",
      description: "No missed reading days",
      points: "400 XP",
      iconBg: "linear-gradient(180deg, #00BCD4 0%, #00838F 100%)",
      shadowColor: "#00BCD480",
      status: "locked",
    },
    {
      id: 8,
      icon: <IoRocketOutline />,
      title: "Level Up",
      description: "Reached Level 5",
      points: "500 XP",
      iconBg: "linear-gradient(180deg, #FF9800 0%, #EF6C00 100%)",
      shadowColor: "#FF980080",
      status: "locked",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#EAF6FF]  to-[#FFF6EA] py-12">
      <div className="w-[80vw] mx-auto space-y-8">
        {/* Header */}
        <header className="flex items-center gap-4">
                    <button onClick={()=> navigate(-1)} className="p-2 bg-white rounded-full shadow-md">
            <IoArrowBack />
          </button>
     <div className="flex items-center justify-center gap-2">
           <IoTrophyOutline size={30} className="text-[#FFD700]" />
          <h2 className="text-[30px] font-semibold text-gray-800">
            My Progress
          </h2>
     </div>
        </header>

        {/* Profile Progress */}
        <ProfileProgress />

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>

        {/* Reading Level */}
        <ReadingLevels />

        {/* Badges */}
        <div className="bg-white rounded-2xl border-4 border-[#FFE87C66] p-6 shadow space-y-6">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            🏅 Badges Collection
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {badgesData.map((badge) => (
              <Badge key={badge.id} {...badge} />
            ))}
          </div>
        </div>
      </div>
     
    </section>
  );
};

/* ---------------- Components ---------------- */

const ProfileProgress = () => {
  const progressPercentage = 70; // 350/500 = 70%
  
  return (
    <div 
      className="rounded-2xl shadow-xl p-6 py-9 gap-6 sm:gap-4"
      style={{
        background: 'linear-gradient(90deg, #87CEEB 0%, #98D8C8 100%)'
      }}
    >
      {/* Left Section - Profile Info */}
      <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl flex-shrink-0">
          👧
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-2xl sm:text-[30px] text-white truncate">Emma</h3>
          <p className="text-sm text-white mt-3">
            Level 4 · Book Champion 🏆
          </p>

          {/* Progress Bar */}
          <div className="mt-3">          
            <div className="flex justify-between">
              <div className="h-3 w-full bg-white/40 rounded-full overflow-hidden mr-4">
                <div 
                  className="top-0 left-0 h-3 bg-gray-800 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="text-center sm:text-right self-center w-24 -mt-10 sm:self-auto">
                <p className="text-4xl font-bold text-white">500</p>
                <p className="text-xs text-white">Total Points</p>
              </div>
            </div>
            <span className="text-white">{progressPercentage}% to next level</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label, icon, iconBg, borderColor }) => (
  <div 
    className="bg-white rounded-2xl border-4 p-5 flex flex-col justify-center items-center gap-3 shadow-xl text-center"
    style={{ borderColor }}
  >
    <div 
      className="w-12 h-12 flex justify-center items-center rounded-full"
      style={{ background: iconBg }}
    >
      {React.cloneElement(icon, { className: "text-white text-2xl" })}
    </div>
    <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    <p className="text-sm text-[#4A5565] mt-1">{label}</p>
  </div>
);

const ReadingLevels = () => {
  const levelsData = [
    { id: 1, title: "Beginning Reader", active: true, date: "Jan 2024" },
    { id: 2, title: "Word Explorer", active: true, date: "Mar 2024" },
    { id: 3, title: "Story Adventurer", active: true, date: "Jun 2024" },
    { id: 4, title: "Book Champion", progress: 70, highlight: true, date: "" },
    { id: 5, title: "Reading Master", active: false, date: "Target: Dec 2024" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border-4 border-[#E6E6FA66] shadow space-y-6"
    
    >
      <h3 className="font-semibold text-gray-800 flex items-center gap-2 text-lg">
        ⭐ Your Reading Journey
      </h3>
      
      {/* Timeline Visualization */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-yellow-400 to-gray-300"></div>
        
        {levelsData.map((level, index) => (
          <TimelineItem 
            key={level.id}
            {...level}
            isFirst={index === 0}
            isLast={index === levelsData.length - 1}
          />
        ))}
      </div>

      {/* Original Level Items */}

    </div>
  );
};

const TimelineItem = ({ title, active, progress, highlight, date, isFirst, isLast }) => {
  const getStatusColor = () => {
    if (active) return "bg-gradient-to-br from-[#87CEEB] to-[#98D8C8]/100";
    if (progress) return "bg-gradient-to-br from-[#FFBB00] to-[#CFAF00]/100";
    return "bg-gradient-to-br from-gray-300 to-gray-400";
  };

  const getStatusIcon = () => {
    if (active) return "✓";
    if (progress) return "⚡";
    return "○";
  };

  return (
    <div className="relative flex items-center gap-4 mb-8 last:mb-0">
      {/* Timeline node */}
      <div className={`relative z-10 w-14 h-14   rounded-full flex items-center justify-center text-white font-semibold text-sm ${getStatusColor()} ${highlight ? "ring-2 ring-yellow-300 ring-offset-2" : ""}`}>
        {getStatusIcon()}
      </div>
      
      {/* Content */}
      <div className={`flex-1 ${highlight ? "bg-yellow-50 border border-yellow-100" : "bg-gray-50"} p-4 rounded-xl`}>
        <div className="flex justify-between items-start">
          <div>
            <h4 className={`font-semibold ${highlight ? "text-yellow-800" : "text-gray-800"}`}>
              {title}
            </h4>
            {
              progress && (
                <p className="text-xs">Read 20 books to complete</p>
              )
            }
            <p className={`text-sm mt-1 ${highlight ? "text-yellow-600" : "text-gray-600"}`}>
              {date}
            </p>
          </div>
          

        </div>
        
        {/* Progress bar for current level */}
        {progress && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};




const Badge = ({ icon, title, description, points, iconBg, shadowColor, status }) => {
const [isModalOpen, setIsModalOpen] = useState(false);


const data = {
  icon, title, description, points, iconBg, shadowColor, status
}

  return (
   
  <div 
  onClick={()=> setIsModalOpen(true)}
    className="rounded-xl p-4 flex items-center justify-center flex-col gap-4 text-center transition-transform hover:scale-[1.02]"
    style={{ 
      boxShadow: `0 4px 20px ${shadowColor}`,
      background: status === "locked" ? "#F3F4F6" : "white",
      opacity: status === "locked" ? 0.7 : 1
    }}
  >
    <div 
      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-lg"
      style={{ background: iconBg }}
    >
      {React.isValidElement(icon) 
        ? React.cloneElement(icon, { className: "text-white text-2xl" })
        : <span className="text-2xl">{icon}</span>
      }
    </div>

    <p className="text-sm font-semibold text-gray-800">{title}</p>
    <p className="text-[12px] text-gray-600">{description}</p>
    
    {status === "earned" ? (
      <>
        <p className="text-xs font-semibold flex justify-center items-center gap-1 text-[#87CEEB]">
          <FaStar /> Earned
        </p>
        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
          + {points}
        </span>
      </>
    ) : (
      <>
        <p className="text-xs font-semibold flex justify-center items-center gap-1 text-gray-400">
          <FaStar /> Locked
        </p>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          🔒 {points}
        </span>
      </>
    )}
     <Reusable_Modal location= {'achivement'} data={data} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
  </div>
)
}

export default Achievement;