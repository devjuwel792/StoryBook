import React, { useState } from "react";
import statsData from "../../../../assets/storyLibraryStats.json";
import { ChevronDown, Trash2, Upload } from "lucide-react";
import card1 from "../../../../assets/story-library/card1.png";
import card2 from "../../../../assets/story-library/card2.png";
import card3 from "../../../../assets/story-library/card3.png";
import card4 from "../../../../assets/story-library/card4.png";
import card5 from "../../../../assets/story-library/card5.png";
import card6 from "../../../../assets/story-library/card6.png";
import star from "../../../../assets/story-library/star.svg";
import star2 from "../../../../assets/story-library/star2.svg";
import { useNavigate } from "react-router";
import { IoBookOutline, IoSearchOutline } from "react-icons/io5";
import Reusable_Modal from "../../../reusable_components/Reusable_Modal";

export const StoryLibrary = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const stories = [
    {
      id: 1,
      title: "The Enchanted Forest",
      author: "Sarah Williams",
      grade: 3,
      pages: 15,
      status: "Published",
      stars: 2,
      image: card1,
    },
    {
      id: 2,
      title: "Lost in the City",
      author: "James Lee",
      grade: 4,
      pages: 12,
      status: "Draft",
      stars: 3,
      image: card2,
    },
    {
      id: 3,
      title: "Magic Mountain",
      author: "Priya Patel",
      grade: 5,
      pages: 18,
      status: "Published",
      stars: 4,
      image: card3,
    },
    {
      id: 4,
      title: "The Secret Lake",
      author: "Liam Smith",
      grade: 3,
      pages: 10,
      status: "Published",
      stars: 5,
      image: card4,
    },
    {
      id: 5,
      title: "Jungle Adventure",
      author: "Ava Brown",
      grade: 4,
      pages: 14,
      status: "Draft",
      stars: 1,
      image: card5,
    },
    {
      id: 6,
      title: "Robot's Day Out",
      author: "Noah Wilson",
      grade: 5,
      pages: 20,
      status: "Published",
      stars: 3,
      image: card6,
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex w-[80vw] mx-auto flex-col justify-center  py-7 bg-[#FBFBFB] gap-10">
      <div className="">
        <h1 className="text-stone-900 text-3xl font-semibold">Story Library</h1>
        <p className="text-stone-900 text-xl font-normal mt-1">
          View and manage all students
        </p>
      </div>
      <div className="flex items-center gap-5">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="w-96 h-36 p-6 bg-white rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 inline-flex flex-col justify-start items-start gap-8"
          >
            <p className="justify-start text-gray-600 text-sm font-normal font-nunito leading-5">
              {item.label}
            </p>
            <p className="justify-start text-zinc-800 text-3xl font-normal font-nunito leading-9">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center gap-3">
        {/* Search Bar */}
<div className="relative w-full">
          <input
          type="text"
          placeholder="Search stories..."
          className="w-full h-11 pl-10 pr-3 py-1 relative bg-zinc-100 rounded-lg outline outline-[0.80px] outline-offset-[-0.80px] outline-black/0 text-gray-700 text-sm font-normal font-nunito focus:outline-blue-300"
        />
        <IoSearchOutline className="absolute top-1/3 left-3 " />
</div>
        {/* Grade Filter */}
        <select
          className="w-1/4 h-11 px-3 bg-zinc-100 rounded-lg outline outline-[0.80px] outline-offset-[-0.80px] outline-black/0 text-neutral-950 text-sm font-normal font-nunito leading-5 focus:outline-blue-300"
          defaultValue="all"
        >
          <option value="all">All Grades</option>
          <option value="3">Grade 3</option>
          <option value="4">Grade 4</option>
          <option value="5">Grade 5</option>
        </select>
        {/* Upload Story Button */}
        <button
          className="w-1/4 h-11 bg-yellow-400 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors text-zinc-800 text-sm font-normal font-nunito leading-5"
          type="button"
        >
          <Upload size={16} color="#1F3A2B" strokeWidth={1.5} />
          Upload Story
        </button>
      </div>

      <div className="w-full grid grid-cols-4 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className=" bg-white rounded-2xl outline outline-2 outline-offset-[-1.83px] outline-black/10 overflow-hidden flex flex-col"
          >
            <img
              className="w-full h-48 object-cover"
              src={story.image}
              alt="Story Cover"
            />
            <div className="flex flex-col gap-2 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-neutral-950 text-lg font-normal font-nunito leading-7">
                  {story.title}
                </h2>
                <span
                  className={`${
                    story.status === "Published"
                      ? "bg-emerald-500/10 text-emerald-600"
                      : "bg-gray-200 text-gray-500"
                  } rounded-full px-3 py-1 text-xs font-normal font-nunito`}
                >
                  {story.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm font-normal font-nunito">
                by {story.author}
              </p>
              <div className="flex items-center justify-between gap-3">

                          <span className="text-gray-600 text-sm font-normal flex items-center gap-2 font-nunito">
                  {story.pages} Pages <IoBookOutline />
                </span>

                <span className="rounded-lg px-2 py-0.5 bg-gray-100 text-gray-600 text-sm font-normal font-nunito">
                  Grade: {story.grade}
                </span>
                <span className="flex items-center gap-1">
                  {[...Array(story.stars)].map((_, i) => (
                    <img key={i} src={star} alt="Star" />
                  ))}
                  {[...Array(5 - story.stars)].map((_, i) => (
                    <img key={i} src={star2} alt="Star" />
                  ))}
                </span>
              </div>
              <div className="flex gap-2 mt-4 border-t pt-4">
                <button onClick={()=> setIsModalOpen(true)} className="flex-1 h-8 bg-white rounded-lg outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex items-center justify-center text-neutral-950 text-sm font-normal font-nunito">
                  View
                </button>
                <button
                  onClick={() =>
                    navigate("/dashboard/admin-story-create")
                  }
                  className="flex-1 h-8 bg-white rounded-lg outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex items-center justify-center text-neutral-950 text-sm font-normal font-nunito"
                >
                  Edit
                </button>
                <button className="w-9 h-8 bg-white rounded-lg outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex items-center justify-center">
                  <Trash2 size={16} color="#E7000B" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        <Reusable_Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  location={'storyView'} />
    </div>
  );
};
