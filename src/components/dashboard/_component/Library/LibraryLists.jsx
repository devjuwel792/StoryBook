import React, { useState } from "react";
import { IoArrowBack, IoBookOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router";

const categories = ["All", "Animals", "Space", "Fairy Tales", "Science", "Ocean"];

const stories = [
  {
    title: "The Magical Forest",
    grade: "Grade 1",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=500",
  },
  
  {
    title: "Princess Adventures",
    grade: "Grade 2",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1616627983799-8a6e45eaf2de?w=500",
  },
  {
    title: "Journey to Mars",
    grade: "Grade 3",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500",
  },
  {
    title: "Friendly Animals",
    grade: "Grade 1",
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1501706362039-c6b2a4f9b7e1?w=500",
  },
  {
    title: "Science is Fun",
    grade: "Grade 2",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500",
  },
  {
    title: "Ocean Wonders",
    grade: "Grade 2",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
  },
];

const LibraryLists = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF6EA] to-[#FFFDF9]">
      <div className="w-[80vw] mx-auto p-24 space-y-8">
        {/* Header */}
        <header className="flex items-center gap-4">
          <button className="p-2 bg-white rounded-full shadow">
            <IoArrowBack />
          </button>
          <h2 className="text-2xl flex items-center justify-center gap-3 font-semibold text-gray-800">
            <IoBookOutline size={28} className="mt-1 font-bold text-[#FFB6C1]" /> Story Library
          </h2>
        </header>

        {/* Search */}
        <div className="relative ">
          <IoSearch size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a story..."
            className="w-full pl-12 pr-4 py-3 rounded-full shadow-xl bg-white outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, idx) => (
            <StoryCard key={idx} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Internal Components ---------------- */

const CategoryPill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-medium shadow-md transition
      ${
        active
          ? "bg-teal-300 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
  >
    {label}
  </button>
);

const StoryCard = ({ title, grade, rating, image }) => (
  <Link to={'/23'} className="bg-white rounded-2xl shadow p-4 space-y-3 hover:shadow-lg transition">
    <img
      src={image}
      alt={title}
      className=" w-full object-cover rounded-xl"
      style={{
        height:300
      }}
    />

    <h3 className="font-semibold text-gray-800">{title}</h3>

    <span className="inline-block text-xs  text-yellow-800 px-3 py-1 rounded-full"
    style={{
        background: 'linear-gradient(180deg, #FFE87C 0%, #FFDAB9 100%)'

    }}
    >
      {grade}
    </span>

    <RatingStars rating={rating} />
  </Link>
);

const RatingStars = ({ rating }) => (
  <div className="flex gap-1 text-yellow-400 text-sm">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i}>{i <= rating ? "★" : "☆"}</span>
    ))}
  </div>
);

export default LibraryLists;
