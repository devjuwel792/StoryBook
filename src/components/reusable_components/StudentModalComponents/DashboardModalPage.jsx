import React from "react";
import { FaStar } from "react-icons/fa6";
import {
  IoTrophyOutline,
  IoVolumeMediumOutline,
  IoFlameOutline,
  IoBookOutline,
  IoFlashOutline,
  IoCalendarOutline,
  IoLanguageOutline,
  IoDiamondOutline,
  IoRocketOutline,
} from "react-icons/io5";

const notifications = Array(4).fill({
  title: "Recommended Story for you",
  message: "“Friendly Animals”",
  time: "Just now",
});

const bookmarks = Array(4).fill({
  image: 'https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'The Demo Title',
  grade: 3,
  progress: 40
});

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

const DashboardModalPage = ({ nestedLocation }) => {
  const renderComponent = () => {
    switch (nestedLocation) {
      case 'notification':
        return (
          <div className="space-y-2">
            {notifications.map((notification, index) => (
              <NotificationItem key={index} {...notification} />
            ))}
          </div>
        );
      case 'bookmarks':
        return (
          <div className="space-y-3">
            {bookmarks.map((bookmark, index) => (
              <BookMarks key={index} {...bookmark} rating={3} />
            ))}
          </div>
        );
      case 'wordCount':
        return (
          <div className="space-y-3">
            <WordItem 
              word="Perseverance" 
              definition="continued effort to do or achieve something despite difficulties" 
              onSpeak={() => console.log("Speaking")}
            />
            <WordItem 
              word="Eloquent" 
              definition="having or exercising the power of fluent, forceful, and appropriate speech" 
              onSpeak={() => console.log("Speaking")}
            />
          </div>
        );
      case 'badges':
        return <BagesModal />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full rounded-2xl pt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-medium text-gray-800">
          {nestedLocation === 'notification' && 'Notification'}
          {nestedLocation === 'bookmarks' && 'Bookmarks'}
          {nestedLocation === 'wordCount' && 'Vocabulary'}
          {nestedLocation === 'badges' && 'Badges Collection'}
        </h3>
      </div>

      {renderComponent()}
    </div>
  );
};

/* ---------------- Notification Item ---------------- */

const NotificationItem = ({ title, message, time }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-3 flex justify-between gap-3 hover:bg-gray-50 transition-colors">
    {/* Left */}
    <div className="flex gap-3">
      {/* Checkbox */}
      <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center mt-1 cursor-pointer hover:border-blue-500">
        <span className="text-xs text-transparent hover:text-gray-600">✓</span>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <p className="text-[11px] text-gray-600">
          {title}
        </p>
        <p className="text-[12px] font-medium text-gray-800">
          {message}
        </p>
      </div>
    </div>

    {/* Time */}
    <span className="text-[10px] text-gray-400 whitespace-nowrap">
      {time}
    </span>
  </div>
);

/* ---------------- Bookmarks ---------------- */

const BookMarks = ({ image, title, grade, rating }) => (
  <div className="flex gap-3 border border-gray-200 rounded-xl p-3 hover:shadow-sm transition-shadow">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-12 h-16 rounded-md object-cover flex-shrink-0"
    />

    {/* Info */}
    <div className="flex-1 space-y-1">
      <p className="text-sm font-semibold text-gray-800 truncate">
        {title}
      </p>

      <span className="inline-block text-[10px] bg-yellow-100 text-yellow-800 px-2 py-[2px] rounded-full font-medium">
        Grade {grade}
      </span>

      {/* Rating */}
      <div className="flex gap-1 mt-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar
            key={i}
            className={`text-xs ${
              i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);

/* ---------------- Word Item ---------------- */

const WordItem = ({ word, definition, onSpeak }) => (
  <div className="flex items-center justify-between gap-3 border border-blue-100 rounded-xl px-4 py-3 bg-white hover:bg-blue-50 transition-colors">
    {/* Text */}
    <div className="flex-1">
      <p className="text-sm font-semibold text-gray-800">
        {word} :
        <span className="ml-1 font-normal text-gray-600">
          {definition}
        </span>
      </p>
    </div>

    {/* Speak Button */}
    <button
      onClick={onSpeak}
      className="flex-shrink-0 w-7 h-7 rounded-md border border-blue-300 flex items-center justify-center text-blue-500 hover:bg-blue-100 transition-colors"
      aria-label="Hear pronunciation"
    >
      <IoVolumeMediumOutline size={16} />
    </button>
  </div>
);

/* ---------------- Badges Modal ---------------- */

const BagesModal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8 overflow-y-auto h-[60vh] justify-items-center">
      {badgesData.map((item) => (
        <Badge key={item.id} {...item} />
      ))}
    </div>
  );
};

/* ---------------- Badge Component ---------------- */

const Badge = ({ icon, title, description, points, iconBg, shadowColor, status }) => {
  return (
    <div 
      className="rounded-xl p-4 flex items-center justify-center flex-col gap-3 text-center transition-transform hover:scale-[1.02] w-full "
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

      <p className="text-sm font-semibold text-gray-800 truncate w-full">{title}</p>
      <p className="text-[12px] text-gray-600 min-h-[32px] line-clamp-2">{description}</p>
      
      {status === "earned" ? (
        <>
          <p className="text-xs font-semibold flex justify-center items-center gap-1 text-blue-500">
            <FaStar /> Earned
          </p>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
            + {points}
          </span>
        </>
      ) : (
        <>
          <p className="text-xs font-semibold flex justify-center items-center gap-1 text-gray-400">
            <FaStar /> Locked
          </p>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
            🔒 {points}
          </span>
        </>
      )}
    </div>
  );
};

export default DashboardModalPage;