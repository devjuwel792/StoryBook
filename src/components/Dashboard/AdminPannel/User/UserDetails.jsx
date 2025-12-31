import { ArrowLeft, Star, BookOpen, Send } from "lucide-react";
import profile from "../../../../assets/student.png";

const dictionaryData = [
  { word: "magnificent", from: "The Magic Garden", count: 3 },
  { word: "adventure", from: "Space Adventure", count: 6 },
  { word: "mysterious", from: "Ocean Friends", count: 4 },
  { word: "brilliant", from: "Mountain Climbers", count: 2 },
];

const stories = [
  {
    title: "The Enchanted Forest",
    author: "Sarah Williams",
    grade: 3,
    pages: 15,
    rating: 2,
    image: "https://placehold.co/400x250",
  },
  {
    title: "The Enchanted Forest",
    author: "Sarah Williams",
    grade: 3,
    pages: 15,
    rating: 2,
    image: "https://placehold.co/400x250",
  },
];

export default function StudentDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back */}
      <button className="flex items-center gap-2 text-gray-700 mb-6">
        <ArrowLeft size={18} />
        <span className="font-medium">Back to Student</span>
      </button>

      {/* Student Info */}
      <div className="bg-white rounded-xl border p-6 flex flex-col md:flex-row gap-4">
        <img src={profile} alt="student" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">Sarah Johnson</h2>
          <p className="text-sm text-gray-600">Last active: 30 min ago</p>

          <div className="flex gap-2 mt-2">
            <Badge text="Grade 4" />
            <Badge text="Advanced" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full mt-6 flex items-center justify-between">
        <div className="flex items-center gap-20">
          <Stat label="Total Story" value="10" />
          <Stat label="Reading Level" value="10" />
        </div>

        <div>
          <label className="font-semibold block mb-2">Recommend Story</label>
          <div className="flex gap-3">
            <div className="w-44 px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-center items-center">
              <button className="justify-start text-zinc-800 text-sm font-normal">
                Select story
              </button>
            </div>
            <div className="w-44 px-4 py-3 relative bg-yellow-400 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
              <Send size={16} color="#1F3A2B" strokeWidth={1.5} />
              <button className="text-center justify-start text-zinc-800 text-sm font-normal">
                Recommend
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dictionary Views */}
      <div className="bg-white border rounded-xl p-6 mt-8">
        <h3 className="text-xl font-semibold">Dictionary Views</h3>
        <p className="text-sm text-gray-600 mb-4">
          Words this student looked up (12 total views)
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {dictionaryData.map((item) => (
            <div
              key={item.word}
              className="border rounded-lg p-4 flex justify-between"
            >
              <div>
                <p className="font-medium">{item.word}</p>
                <p className="text-xs text-gray-500">From: {item.from}</p>
              </div>
              <p className="text-green-700 text-sm">{item.count} times</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Stories */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Recommended Story</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, i) => (
          <StoryCard key={i} {...story} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

const Badge = ({ text }) => (
  <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-sm">
    {text}
  </span>
);

const Stat = ({ label, value }) => (
  <div className="w-44">
    <label className="font-semibold block mb-2">{label}</label>
    <div className="border rounded-lg p-3 bg-white">{value}</div>
  </div>
);

const StoryCard = ({ title, author, grade, pages, rating, image }) => (
  <div className="bg-white border rounded-2xl overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />

    <div className="p-4">
      <div className="flex justify-between items-start">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
          Published
        </span>
      </div>

      <p className="text-sm text-gray-600">by {author}</p>

      <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <BookOpen size={14} /> {pages} Pages
        </span>
        <span>Grade: {grade}</span>
        <span className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </span>
      </div>
    </div>
  </div>
);
