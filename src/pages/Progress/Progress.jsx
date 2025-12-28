import { Sun } from "lucide-react";
import React from "react";

export const Progress = () => {
  return (
    <div className="bg-gradient-to-b from-[#E6F3FF] to-[#FFFFFF]">
      <div className="px-[120px] py-[150px] max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-1">
          <Sun size={48} color="#FFE87C" />
          <h1 className="text-4xl font-bold text">Hi, Emma! 👋</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[717.33px] h-96 px-9 pt-9 pb-1 bg-white rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] outline outline-4 outline-offset-[-4px] outline-sky-300/30 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch h-8 inline-flex justify-start items-center gap-2">
                <p className="left-0 top-[-0.80px] absolute justify-start text-gray-800 text-2xl font-bold font-['Nunito'] leading-8">
                  Continue Reading
                </p>
              </div>
            </div>
            <div className="self-stretch h-64 inline-flex justify-start items-start gap-6">
              <div className="w-48 h-64 relative rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] overflow-hidden">
                <img
                  className="w-48 h-64 left-[-1px] top-[0.01px] absolute"
                  src="https://placehold.co/193x256"
                />
              </div>
              <div className="flex-1 h-52 relative">
                <div className="w-96 h-8 left-0 top-0 absolute">
                  <div className="left-0 top-[-0.80px] absolute justify-start text-gray-800 text-2xl font-bold font-['Nunito'] leading-8">
                    The Magical Forest
                  </div>
                </div>
                <div className="w-96 h-12 left-0 top-[39.99px] absolute">
                  <div className="w-96 left-0 top-[-0.20px] absolute justify-start text-gray-600 text-base font-normal font-['Nunito'] leading-6">
                    You're doing great! Keep reading to discover what happens
                    next.
                  </div>
                </div>
                <div className="w-96 h-10 left-0 top-[103.99px] absolute inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch h-5 inline-flex justify-between items-start">
                    <div className="w-20 h-5 flex justify-start items-start">
                      <div className="justify-start text-gray-600 text-sm font-normal font-['Nunito'] leading-5">
                        Your Progress
                      </div>
                    </div>
                    <div className="w-7 h-5 relative">
                      <div className="w-7 left-0 top-[-1px] absolute justify-start text-gray-600 text-sm font-normal font-['Nunito'] leading-5">
                        45%
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-3 pl-0 pr-60 bg-gray-200 rounded-full flex flex-col justify-start items-start overflow-hidden">
                    <div className="self-stretch h-3 relative bg-gray-800" />
                  </div>
                </div>
                <div className="w-56 h-12 left-0 top-[167.99px] absolute bg-gradient-to-l from-gray-800 to-emerald-200 rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg">
                  <div className="left-[32px] top-[11.80px] absolute text-center justify-start text-white text-base font-bold font-['Nunito'] leading-6">
                    Continue Reading →
                  </div>
                </div>
              </div>
            </div>
        </div>


          <div></div>
        </div>
      </div>
  );
};
