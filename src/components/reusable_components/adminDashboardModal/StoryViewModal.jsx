import React from "react";

const data = `You don’t know how beautiful you are. You think no one would look at you without the kohl on your face, the gold in your hair, the corset cinched around your vanishing center. You thought coming here with a cloak on bent shoulders would make me see a crone, as if your unpainted skin held one single wrinkle. If you walked through the village instead of the wood, men would fight for the right to propose to you. Without any of the trappings and rituals you feel forced to maintain, you would still be the most beautiful thing any of them had ever seen.
Any of us.I knew it was you when I opened the door. I knew you had found me, what you came here to do. Of course I invited you in. I wanted to be found.
That’s what I told the huntsman when he begged me to run away. He did not want to cut out my heart and feed it to you. If I had any skill with a blade, I’d have put it on the platter myself.`;

const StoryViewModal = () => {
  return (
    <div className="w-full h-full p-5 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-lg font-semibold text-gray-700">
          The Magical Forest
        </h2>
      </div>

      {/* Story Body (Scrollable) */}
      <div className="relative flex-1 overflow-y-auto px-6 py-6 text-gray-600 text-sm leading-7">
        {/* Lined paper background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_27px,#E5E7EB_28px)] bg-[length:100%_28px] pointer-events-none"></div>

        {/* Content */}
        <div className="relative space-y-7">
          {data.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Footer (Pinned Bottom) */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 flex-shrink-0">
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-300 to-rose-300 text-white text-sm shadow">
          ← Previous Page
        </button>

        <span className="text-xs text-gray-500">
          Page 1 of 3
        </span>

        <button
          className="px-5 py-2 rounded-full text-white text-sm shadow"
          style={{
            background:
              "linear-gradient(90deg, #213C2D 0%, #98D8C8 100%)",
          }}
        >
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default StoryViewModal;
