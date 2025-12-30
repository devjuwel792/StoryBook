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
// import storiesData from "../../assets/myStoriesList.json";
import { useState } from "react";
import toast from "react-hot-toast";
import StoryModal from "../../components/StoryModal";
import { useNavigate } from "react-router";
import card1 from "../../assets/story-library/card1.png";
import card2 from "../../assets/story-library/card2.png";
import card3 from "../../assets/story-library/card3.png";
import card4 from "../../assets/story-library/card4.png";
import card5 from "../../assets/story-library/card5.png";
import card6 from "../../assets/story-library/card6.png";
import star from "../../assets/story-library/star.svg";
import star2 from "../../assets/story-library/star2.svg";

export const MyStories = () => {
  const storiesData = [
    {
      id: 1,
      title: "The Enchanted Forest",
      story:
        "Deep inside an ancient forest where sunlight barely touched the ground, there lived a young owl who had never flown beyond the tallest oak tree. One stormy night, strong winds tore through the forest and carried the owl far away from his home. When morning came, everything looked unfamiliar.\n\nThe owl searched tirelessly, flying from tree to tree, calling out for his family, but only echoes replied. Along the way, he met a kind deer who guided him to a river, a wise tortoise who taught him patience, and a playful squirrel who reminded him not to lose hope.\n\nAfter days of searching, the owl climbed higher than he ever had before. From the sky, he finally recognized the shape of his forest. With renewed strength, he followed the familiar path home. When he reunited with his family, the owl realized that getting lost had taught him courage, trust, and the true meaning of home.",
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
      story:
        "Behind an old wooden gate at the edge of a quiet village, there was a garden unlike any other. Every flower in the garden could talk, sing, and share stories of the past. Roses whispered secrets of love, sunflowers laughed loudly in the sun, and lilies hummed soft melodies at night.\n\nA curious child named Lina discovered the garden one afternoon. At first, she thought she was imagining the voices, but soon the flowers welcomed her warmly. They asked Lina to help protect the garden from being forgotten, as people no longer believed in magic.\n\nLina returned every day, watering the plants and listening to their songs. Slowly, the garden grew brighter and more alive. Years later, when Lina became an adult, the garden still bloomed—silent to others, but forever magical to those who believed.",
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
      story:
        "At the edge of a quiet meadow lived a small fox who dreamed of seeing the world beyond the hills. While other foxes warned him of danger, curiosity burned stronger than fear. One morning, he decided to leave the safety of his den and begin his journey.\n\nThe fox crossed rivers, climbed rocky paths, and faced storms that tested his strength. When fear crept in, he remembered why he started—to prove to himself that he was capable. Along the way, he learned to trust his instincts and ask for help when needed.\n\nWhen the fox finally returned home, he was no longer just small or curious. He was brave. His story inspired others to explore their own paths, reminding them that courage is not the absence of fear, but the decision to move forward despite it.",
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
      story:
        "In a town where no one ever spoke after sunset, there lived an old clockmaker named Elias. Every evening, precisely at six, the streets would fall into a deep, unnatural silence, as if the town itself was holding its breath. No one remembered when the rule began, only that breaking it once had terrible consequences.\n\nElias was different. While others feared the silence, he listened to it. Inside his dimly lit workshop, hundreds of clocks ticked in harmony, filling the quiet with a soft, reassuring rhythm. He believed the clocks were speaking, telling stories trapped in time.\n\nOne night, a young girl named Mira knocked on his door after sunset. Her voice shattered the silence. Elias froze, expecting disaster. But nothing happened. Instead, the clocks stopped ticking, one by one. The silence deepened, heavier than before.\n\nMira explained that her brother had vanished when he followed the silence into the forest beyond the town. She believed the clocks knew where he was. Elias realized the truth he had avoided for years: the silence was not a rule, but a prison, and the clocks were its locks.\n\nTogether, they rewound the oldest clock in the shop, a massive timepiece Elias had never dared to touch. As its hands moved backward, sound returned to the town—footsteps, whispers, wind, and finally, voices filled the streets. The silence broke, and with it, the curse.\n\nAt dawn, the townspeople spoke freely for the first time in generations. Mira's brother returned, confused but alive. Elias closed his workshop that day. The town no longer needed a clockmaker to keep time frozen. It needed people brave enough to let it move forward.",
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
      story:
        "Deep inside an ancient forest where sunlight barely touched the ground, there lived a young owl who had never flown beyond the tallest oak tree. One stormy night, strong winds tore through the forest and carried the owl far away from his home. When morning came, everything looked unfamiliar.\n\nThe owl searched tirelessly, flying from tree to tree, calling out for his family, but only echoes replied. Along the way, he met a kind deer who guided him to a river, a wise tortoise who taught him patience, and a playful squirrel who reminded him not to lose hope.\n\nAfter days of searching, the owl climbed higher than he ever had before. From the sky, he finally recognized the shape of his forest. With renewed strength, he followed the familiar path home. When he reunited with his family, the owl realized that getting lost had taught him courage, trust, and the true meaning of home.",

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
      story:
        "Behind an old wooden gate at the edge of a quiet village, there was a garden unlike any other. Every flower in the garden could talk, sing, and share stories of the past. Roses whispered secrets of love, sunflowers laughed loudly in the sun, and lilies hummed soft melodies at night.\n\nA curious child named Lina discovered the garden one afternoon. At first, she thought she was imagining the voices, but soon the flowers welcomed her warmly. They asked Lina to help protect the garden from being forgotten, as people no longer believed in magic.\n\nLina returned every day, watering the plants and listening to their songs. Slowly, the garden grew brighter and more alive. Years later, when Lina became an adult, the garden still bloomed—silent to others, but forever magical to those who believed.",
      author: "Noah Wilson",
      grade: 5,
      pages: 20,
      status: "Published",
      stars: 3,
      image: card6,
    },
  ];
  const navigate = useNavigate();
  const [stories, setStories] = useState(storiesData);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStory, setModalStory] = useState(null);
  const [modalPage, setModalPage] = useState(1);

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <span className="text-gray-800 font-nunito">
            Are you sure you want to delete this story? This action cannot be
            undone.
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
<div className="min-h-screen bg-gradient-to-br from-[#FFF0F5] to-white p-10">
      <div className=" w-[80vw] mx-auto ">
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
          <div className="w-full flex gap-4">
            {statsData.map((card) => (
              <div
                key={card.id}
                className="w-1/3 h-24 p-5 bg-white rounded-2xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-gray-100 inline-flex flex-col justify-start items-start gap-1"
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
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg px-2 py-0.5 bg-gray-100 text-gray-600 text-sm font-normal font-nunito">
                      Grade: {story.grade}
                    </span>
                    <span className="text-gray-600 text-sm font-normal font-nunito">
                      {story.pages} Pages
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
                    <button
                      onClick={() => {
                        setModalStory(story);
                        setModalPage(1);
                        setModalOpen(true);
                      }}
                      className="flex-1 h-8 bg-white rounded-lg outline outline-[0.80px] outline-offset-[-0.80px] outline-black/10 flex items-center justify-center text-neutral-950 text-sm font-normal font-nunito"
                    >
                      View
                    </button>
                    <button
                      onClick={() =>
                        navigate("/story-creator", {
                          state: {
                            id: story.id,
                            title: story.title,
                            story: story.story,
                            image: story.image,
                          },
                        })
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
        </div>
      </div>
      {/* Story Modal */}
      <StoryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        story={modalStory}
        page={modalPage}
        setPage={setModalPage}
      />
    </div>
</div>
  );
};
