import React from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { BsBook, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
const fakeStories = [
  {
    id: 1,
    title: "The Enchanted Forest",
    author: "Sarah Williams",
    pages: 15,
    grade: 3,
    rating: 4,
    status: "published",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "The Enchanted Forest",
    author: "Sarah Williams",
    pages: 15,
    grade: 3,
    rating: 4,
    status: "published",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "The Enchanted Forest",
    author: "Sarah Williams",
    pages: 15,
    grade: 3,
    rating: 4,
    status: "published",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
  },
];

export default function StorySelectModal({ isOpen, onClose, onSelectStory }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedGrade, setSelectedGrade] = React.useState("All Grades");

  if (!isOpen) return null;

  const filteredStories = fakeStories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGrade =
      selectedGrade === "All Grades" || story.grade === parseInt(selectedGrade);

    return matchesSearch && matchesGrade;
  });

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 py-6 bg-black/50">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 ">
          <div className="flex items-center gap-4 ">
            <div className="relative flex-1">
              <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search stories by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2.5 pl-10 pr-4 text-sm bg-[#F3F3F5] border border-[#e7e7f0] rounded-lg"
              />
            </div>

            <div className="relative">
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="appearance-none  rounded-lg px-4 py-2.5 pr-10 text-sm bg-[#F3F3F5] border border-[#e7e7f0] text-[#0A0A0A]"
              >
                <option>All Grades</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <ChevronDown className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
            </div>

            <button onClick={onClose} className="p-2 text-gray-400">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 px-6 py-4 overflow-y-auto">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="overflow-hidden bg-white border cursor-pointer rounded-xl hover:shadow-lg"
                onClick={() => {
                  onSelectStory(story);
                  onClose();
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-3 py-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-normal text-[#0A0A0A] text-lg inter">
                      {story.title}
                    </h4>
                    <p
                      className={`text-xs ${
                        story.status === "published"
                          ? "text-green-600 bg-[#e1f8f0] px-3 py-1 rounded-full"
                          : "text-red-600"
                      }`}
                    >
                      {story.status === "published" ? "Published" : "Draft"}
                    </p>
                  </div>
                  <p className="text-sm text-[#4A5565] mb-3">
                    by {story.author}
                  </p>
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
      </div>
    </div>
  );
}
