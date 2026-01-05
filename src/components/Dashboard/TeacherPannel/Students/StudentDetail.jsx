import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { BsBook, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router";
import StorySelectModal from "./StorySelectModal";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const fakeStudent = {
  name: "Sarah Johnson",
  lastActive: "30min ago",
  grade: 4,
  vocabulary: "Advanced",
  totalStory: 10,
  readingLevel: 10,
  recommendedStory: "Category story",
  dictionaryViews: [
    { word: "magnificent", from: "The Magic Garden", times: 3 },
    { word: "adventure", from: "Space Adventure", times: 6 },
    { word: "mysterious", from: "Ocean Friends", times: 4 },
    { word: "brilliant", from: "Mountain Climbers", times: 2 },
  ],
  recommendedStories: [
    {
      title: "The Enchanted Forest",
      author: "Sarah Williams",
      pages: 15,
      grade: 3,
      rating: 2,
      published: true,
      img: "https://res.cloudinary.com/dwycwft99/image/upload/v1767092695/image_65_e3axbs.png",
    },
    {
      title: "The Enchanted Forest",
      author: "Sarah Williams",
      pages: 15,
      grade: 3,
      rating: 2,
      published: true,
      img: "https://res.cloudinary.com/dwycwft99/image/upload/v1767092705/image_66_ggmyt2.png",
    },
  ],
};

export default function StudentDetail() {
  // const [recommended, setRecommended] = useState(fakeStudent.recommendedStory);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const navigate = useNavigate();
  // Star Rating Component
  const StarRating = ({ rating = 3, maxStars = 5 }) => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(<BsStarFill key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(<BsStarHalf key={i} className="text-yellow-400" />);
      } else {
        // Empty star
        stars.push(<BsStar key={i} className="text-gray-300" />);
      }
    }

    return <div className="flex items-center gap-0.5">{stars}</div>;
  };
  const handleBack = () => {
    //    naviagate(`/dashboard/teacher/students/${id}`);
    navigate(`/dashboard/students`);
  };

  return (
    <div className="p-6">
      <Toaster position="top-right" />
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-4 text-base text-[#222222] hover:underline inter roboto flex items-center gap-1"
      >
        <IoArrowBack /> Back to Student
      </button>

      {/* Student Info */}
      <div className="flex items-center gap-4 p-6 mb-20 border rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 text-xl text-white green rounded-full border border-[#EBEBEB]">
          {fakeStudent.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-base text-[#1F1F1F] inter">{fakeStudent.name}</h2>
          <p className="text-sm text-[#2E2E2E] inter mt-1">
            Last active: {fakeStudent.lastActive}
          </p>
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 text-xs inter text-[#F39F05] bg-[#FFEDC5] rounded-full">
              Grade {fakeStudent.grade}
            </span>
            <span className="px-2 py-1 text-xs  inter text-[#F39F05] bg-[#FFEDC5] rounded-full">
              {fakeStudent.vocabulary}
            </span>
          </div>
        </div>
      </div>

      {/* Story & Reading Level */}
      <div className="flex justify-between gap-4 mb-6">
        <div className="flex flex-col items-start justify-center gap-3 ">
          <label className="text-base font-bold text-[#2E2E2E]">
            Total Story:
          </label>
          <input
            type="number"
            value={fakeStudent.totalStory}
            readOnly
            className="px-3 py-1 mt-1 text-center border rounded-lg "
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-3 ">
          <label className="text-base font-bold text-[#2E2E2E]">
            Reading level:
          </label>
          <input
            type="number"
            value={fakeStudent.readingLevel}
            readOnly
            className="px-3 py-1 mt-1 text-center border rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-3 ">
          <label className="text-base font-bold text-[#2E2E2E]">
            Recommend Story:
          </label>
          <div className="flex items-center justify-start gap-2">
            {/* No story selected */}
            {!selectedStory && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-1 text-sm text-black inter bg-[#FFFFFF] rounded-lg border border-[#E5E5E5]"
              >
                Select story
              </button>
            )}

            {/* Story selected */}
            {selectedStory && (
              <>
                <div className="flex items-center gap-2 px-4 py-1 text-sm bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg">
                  <span className="text-black inter">
                    {selectedStory.title}
                  </span>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <IoClose size={16} />
                  </button>
                </div>

                <button
                  onClick={() => {
                    toast.success("Story recommended successfully!");
                    setSelectedStory(null);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-1 text-sm text-black bg-[#E8CC13] rounded-lg"
                >
                  <LuSend /> Recommend
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Dictionary Views */}
      <div className="mb-20 bg-white border border-[#F3F3F3] p-6 rounded-xl mt-24">
        <h3 className="mb-2 font-medium inter text-[#000000]">
          Dictionary Views
        </h3>
        <p className="mb-2 text-sm text-[#000000] font-normal inter">
          Words this student looked up ({fakeStudent.dictionaryViews.length}{" "}
          total views)
        </p>
        <div className="grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2">
          {fakeStudent.dictionaryViews.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-3 py-6 border border-[#EBEBEB] bg-white rounded-lg inter"
            >
              <div>
                <p className="font-medium text-[#1F1F1F]">{item.word}</p>
                <p className="text-xs text-[#1F1F1F]">From: {item.from}</p>
              </div>
              <p className="text-sm text-green-600">{item.times} times</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Stories */}
      <div className="">
        <h3 className="mb-8 font-medium headerFont text-2xl text-[#1E2939]">
          Recommended Story
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {fakeStudent.recommendedStories.map((story, idx) => (
            <div key={idx} className="overflow-hidden border rounded-xl">
              <img
                src={story.img}
                alt={story.title}
                className="w-full rounded-t-xl"
              />
              <div className="px-3 py-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-normal text-[#0A0A0A] text-lg inter">
                    {story.title}
                  </h4>
                  <p
                    className={`text-xs ${
                      story.published
                        ? "text-green-600 bg-[#e1f8f0] px-3 py-1 rounded-full"
                        : "text-red-600"
                    }`}
                  >
                    {story.published ? "Published" : "Draft"}
                  </p>
                </div>
                <p className="text-sm text-[#4A5565] mb-3">by {story.author}</p>
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2 text-sm text-[#4A5565]">
                    {" "}
                    <BsBook />
                    {story.pages} Pages
                  </p>
                  <p className="flex items-center gap-2 text-sm text-[#4A5565]">
                    {" "}
                    Grade: {story.grade}
                  </p>
                  <div className="flex items-center gap-2">
                    <StarRating rating={story.rating || 3} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StorySelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectStory={(story) => setSelectedStory(story)}
      />
    </div>
  );
}
