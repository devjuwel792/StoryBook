import {
  ArrowLeft,
  Calendar,
  Eye,
  FileText,
  SquarePen,
  Trash2,
  WandSparkles,
} from "lucide-react";
import statsData from "../../assets/myStoriesStats.json";
import storiesData from "../../assets/myStoriesList.json";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const MyStories = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState(storiesData);

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <span className="text-gray-800 font-nunito">
            Are you sure you want to delete this story? This action cannot be undone.
          </span>
          <div className="flex justify-center gap-2 mt-2">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm font-nunito"
              onClick={() => {
                setStories((prev) => prev.filter((s) => s.id !== id));
                toast.dismiss(t.id);
                toast.success("Story deleted");
              }}
            >
              Confirm
            </button>
            <button
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm font-nunito"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF0F5] to-white p-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft color="#364153" />
          </button>
          <WandSparkles size={40} color="#FFB6C1" />
          <div className="mt-3">
            <h1 className="text-[#767676] text-4xl font-bold">My Stories</h1>
            <p className="justify-start text-gray-600 text-base font-normal font-nunito leading-6">
              All your creative works
            </p>
          </div>
        </div>
      </div>
      {/* New Story Button */}
      <div className="flex items-center justify-end">
        <button
          onClick={() => navigate("/story-creator")}
          className="mb-7 px-6 py-3 bg-gradient-to-br from-[#254233] to-[#96D5C5] rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] transition-all hover:shadow-md hover:brightness-105 flex items-center justify-center gap-2 text-white text-base font-medium font-nunito"
        >
          <FileText size={20} strokeWidth={1.5} />
          New Story
        </button>
      </div>
      {/* Story List */}
      <div className="w-full bg-gray-50 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-8 px-16 py-14">
          <div className="grid grid-cols-3 gap-4">
            {statsData.map((card) => (
              <div
                key={card.id}
                className="w-96 h-24 p-5 bg-white rounded-2xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-gray-100 inline-flex flex-col justify-start items-start gap-1"
              >
                <p className="justify-start text-[#767676] text-3xl font-semibold font-nunito">
                  {card.value}
                </p>
                <p className="flex-1 justify-start text-gray-600 text-sm font-normal font-nunito">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className="p-6 bg-gradient-to-l from-[#97D7CA] to-[#87CEEB] rounded-2xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-gray-100 inline-flex flex-col justify-start items-start gap-4"
              >
                <h1 className="justify-start text-gray-900 text-lg font-semibold font-nunito">
                  {story.title}
                </h1>
                <p className="justify-start text-gray-600 text-sm font-normal font-nunito">
                  {story.story.split(" ").slice(0, 4).join(" ")}...
                </p>
                <div className="w-full flex items-center justify-start gap-3 border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} strokeWidth={1.5} />
                    <p className="justify-start text-gray-500 text-xs font-normal font-nunito">
                      {story.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText size={12} strokeWidth={1.5} />
                    <p className="justify-start text-gray-500 text-xs font-normal font-nunito">
                      {story.words} words
                    </p>
                  </div>
                </div>
                {/* Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="w-24 h-9 relative bg-gray-50 rounded-[10px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.12)] flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer transition-colors">
                    <SquarePen size={16} color="#767676" strokeWidth={1.5} />
                    <p className="text-center justify-start text-[#767676] text-sm font-medium font-nunito leading-5">
                      Edit
                    </p>
                  </div>
                  <div className="w-24 h-9 relative bg-gray-50 rounded-[10px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.12)] flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer transition-colors">
                    <Eye size={16} color="#767676" strokeWidth={1.5} />
                    <p className="text-center justify-start text-[#767676] text-sm font-medium font-nunito leading-5">
                      View
                    </p>
                  </div>
                  <button
                    type="button"
                    className="w-24 h-9 relative bg-gray-50 rounded-[10px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.12)] flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => handleDelete(story.id)}
                  >
                    <Trash2 size={16} color="#767676" strokeWidth={1.5} />
                    <span className="text-center justify-start text-[#767676] text-sm font-medium font-nunito leading-5">
                      Delete
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
