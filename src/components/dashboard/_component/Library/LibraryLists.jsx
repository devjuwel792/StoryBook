import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoArrowBack, IoBookOutline, IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router";

const recommendedStories = [
  {
    title: "The Enchanted Forest",
    author: "by Luna Moonbeam",
    grade: "Grade 3",
    pages: 18,
    rating: 5,
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80&auto=format&fit=crop", // Magical forest with glowing mushrooms
  },
  {
    title: "Space Adventures with Zog",
    author: "by Captain Cosmo",
    grade: "Grade 3",
    pages: 22,
    rating: 5,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80&auto=format&fit=crop", // Colorful galaxy scene
  },
  {
    title: "Underwater Treasure",
    author: "by Marina Pearl",
    grade: "Grade 3",
    pages: 16,
    rating: 4,
    image: "https://images.unsplash.com/photo-1536152471326-642d7bb5e0b1?w=600&q=80&auto=format&fit=crop", // Underwater castle
  },
  {
    title: "Dragon's Best Friend",
    author: "by Ember Spark",
    grade: "Grade 3",
    pages: 20,
    rating: 4,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format&fit=crop", // Friendly dragon illustration
  },
  {
    title: "The Little Robot Who Could",
    author: "by Chip Circuit",
    grade: "Grade 3",
    pages: 14,
    rating: 4,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop", // Cute robot friends
  },
];

const yourStories = [
  {
    title: "Princess and the Crystal Kingdom",
    author: "by Sarah Williams",
    grade: "Grade 3",
    pages: 24,
    rating: 5,
    image: "https://images.unsplash.com/photo-1560851248-7a2a48efb433?w=600&q=80&auto=format&fit=crop", // Crystal castle
  },
  {
    title: "Adventures in Dinosaur Land",
    author: "by Rex Explorer",
    grade: "Grade 3",
    pages: 19,
    rating: 4,
    image: "https://images.unsplash.com/photo-1518358246973-95637f1df901?w=600&q=80&auto=format&fit=crop", // Dinosaur jungle
  },
  {
    title: "The Magic Paintbrush",
    author: "by Artist Amy",
    grade: "Grade 3",
    pages: 17,
    rating: 4,
    image: "https://images.unsplash.com/photo-1544931170-3ca1337cce88?w=600&q=80&auto=format&fit=crop", // Colorful paintbrush magic
  },
  {
    title: "Pirate Island Mystery",
    author: "by Captain Bluebeard",
    grade: "Grade 3",
    pages: 21,
    rating: 5,
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80&auto=format&fit=crop", // Pirate treasure map
  },
  {
    title: "Cloud Castle Adventures",
    author: "by Sky Captain",
    grade: "Grade 3",
    pages: 15,
    rating: 4,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&q=80&auto=format&fit=crop", // Castle in the clouds
  },
  {
    title: "The Talking Animals of Berry Wood",
    author: "by Forest Friend",
    grade: "Grade 3",
    pages: 18,
    rating: 4,
    image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?w=600&q=80&auto=format&fit=crop", // Forest animals party
  },
  {
    title: "Super Science Squad",
    author: "by Professor Proton",
    grade: "Grade 3",
    pages: 16,
    rating: 3,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80&auto=format&fit=crop", // Science lab fun
  },
  {
    title: "Mermaid's Secret Garden",
    author: "by Coral Queen",
    grade: "Grade 3",
    pages: 20,
    rating: 5,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80&auto=format&fit=crop", // Underwater garden
  },
  {
    title: "The Brave Little Knight",
    author: "by Sir Gallant",
    grade: "Grade 3",
    pages: 14,
    rating: 4,
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80&auto=format&fit=crop", // Knight and dragon
  },
  {
    title: "Rainbow Bridge to Tomorrow",
    author: "by Future Friend",
    grade: "Grade 3",
    pages: 12,
    rating: 4,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop", // Futuristic rainbow bridge
  },
  {
    title: "Cookie Castle Chaos",
    author: "by Baker Ben",
    grade: "Grade 3",
    pages: 13,
    rating: 3,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80&auto=format&fit=crop", // Candy land illustration
  },
  {
    title: "Alien Sleepover",
    author: "by Galaxy Gazer",
    grade: "Grade 3",
    pages: 17,
    rating: 5,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80&auto=format&fit=crop", // Friendly aliens scene
  },
];


const LibraryLists = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF6EA] to-[#FFFDF9]">
      <div className="w-[80vw] mx-auto py-20 space-y-10">
        {/* Header */}
        <header className="flex items-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white rounded-full shadow"
          >
            <IoArrowBack />
          </button>

          <h2 className="text-[40px] font-semibold flex items-center gap-3 text-gray-800">
            <IoBookOutline className="text-[#FFB6C1] mt-1" size={44} />
            Story Library
          </h2>
        </header>

        {/* Search */}
        <div className="relative">
          <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search for a story..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <FilterPill
  label="Grade"
  options={["All", "Grade 1", "Grade 2", "Grade 3"]}
/>

<FilterPill
  label="Vocabulary"
  options={["All", "Beginner", "Intermediate", "Advanced"]}
/>

        </div>

        {/* Recommended */}
        <Section title="Recommended Story">
          {recommendedStories.map((story, i) => (
            <StoryCard key={i} {...story} />
          ))}
        </Section>

        {/* Your Story */}
        <Section title="Your Story">
          {yourStories.map((story, i) => (
            <StoryCard key={i} {...story} />
          ))}
        </Section>
      </div>
    </section>
  );
};

/* ---------------- Small Components ---------------- */

const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-semibold font-semibold text-gray-700">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {children}
    </div>
  </div>
);

const FilterPill = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Pill */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-6 bg-white rounded-full shadow cursor-pointer"
      >
        <p
          className="px-4 py-3 text-white text-sm rounded-l-full"
          style={{
            background: "linear-gradient(90deg, #213C2D 0%, #98D8C8 100%)",
          }}
        >
          {label}
        </p>

        <span className="flex items-center gap-2 pr-6 text-gray-600 text-lg">
          {selected}
          <IoMdArrowDropdown size={18} />
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-xl py-2">
          {options.map((item) => (
            <button
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className={`w-full text-center py-2 text-sm font-semibold transition
                ${
                  selected === item
                    ? "font-semibold text-gray-900"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};



const StoryCard = ({ title, author, grade, pages, rating, image }) => (
  <Link
    to="/23"
    className="bg-white rounded-2xl shadow p-4 space-y-3 hover:shadow-lg transition"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-[330px] object-cover rounded-xl"
    />

    <h4 className="font-semibold text-gray-800">{title}</h4>

    <div className="flex justify-between">
    <p className="text-xs text-gray-500">{author}</p>
      <RatingStars rating={rating} />
    </div>

    <div className="flex items-center justify-between text-xs text-gray-500">
      <span
        className="px-3 py-2 text-[14px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #FFE87C 0%, #FFDAB9 100%)",
        }}
      >
        {grade}
      </span>
      <span className="text-[15px]">📖 {pages} Pages</span>
    </div>

    
  </Link>
);

const RatingStars = ({ rating }) => (
  <div className="flex gap-1 text-yellow-400 text-xl">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i}>{i <= rating ? "★" : "☆"}</span>
    ))}
  </div>
);

export default LibraryLists;
