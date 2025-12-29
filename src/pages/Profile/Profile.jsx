import React from "react";
import { IoArrowBack, IoCameraOutline, IoLogOutOutline, IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const Profile = () => {
    const navigate = useNavigate()
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F4F6FF] to-white py-12">
      <div className="w-[80vw] mx-auto space-y-10">
        {/* Header */}
        <header className="flex items-center gap-3">
          <button onClick={()=> navigate(-1)} className="p-2 bg-white rounded-full shadow">
            <IoArrowBack />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            👤 My Profile
          </h2>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Avatar Card */}
          <AvatarCard />

          {/* Right: Personal Info */}
          <PersonalInfo />
        </div>

        {/* Reading Preferences */}
        <ReadingPreferences />

        {/* Actions */}
        <div className="flex gap-6">
          <ActionCard
            icon={<IoLogOutOutline />}
            title="Log Out"
            subtitle="See you next time!"
            borderColor="border-red-300"
            textColor="text-red-500"
          />
          <ActionCard
            icon={<IoTrashOutline />}
            title="Delete Account"
            subtitle="See you next time!"
            borderColor="border-red-400"
            textColor="text-red-600"
          />
        </div>
      </div>
    </section>
  );
};

/* ---------------- Components ---------------- */

const AvatarCard = () => (
  <div className="bg-white rounded-2xl shadow-xl p-6 text-center space-y-4">
    <h3 className="text-sm font-semibold text-gray-600">Your Avatar</h3>

    <div className="relative mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-5xl text-white">
      👧
      <button className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow">
        <IoCameraOutline size={16} className="text-gray-600" />
      </button>
    </div>

    <div>
      <p className="text-[24px] text-[#1E2939] font-semibold">Emma</p>
      <p className="">Grade 3</p>
    </div>

    <div className="flex gap-4 justify-center">
      <StatMini value="12" textColor = {'#87CEEB'} label="Books Read" highlight={'linear-gradient(180deg, #FFF8E6 0%, #FFF0F5 100%)'} />
      <StatMini value="Level 4" textColor={'#FFD700'} label="Reading Level" highlight='linear-gradient(180deg, #E6F3FF 0%, #F0F8FF 100%)' />
    </div>
  </div>
);

const PersonalInfo = () => (
  <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-cyan-200 p-6 space-y-6">
    <h3 className="font-semibold text-[24px] text-gray-800 flex items-center gap-2">
      👤 Personal Information
    </h3>

    <Input label="Display Name" value="Emma" />
    <Input label="Grade" value="" />
    <Input label="Favorite Genre" value="" />

    <button
      className="w-full py-3 rounded-full text-white font-medium shadow"
      style={{
        background: "linear-gradient(90deg, #213C2D 0%, #98D8C8 100%)",
      }}
    >
      Save Changes
    </button>
  </div>
);

const ReadingPreferences = () => (
  <div className="bg-white rounded-2xl shadow border border-yellow-200 p-6 space-y-4">
    <h3 className="font-semibold text-gray-800 text-[24px] flex items-center gap-2">
      🌟 Reading Preferences
    </h3>

    <PreferenceItem
      title="Reading Level"
      subtitle="Current: 4"
      bg="bg-yellow-50"
    />
    <PreferenceItem
      title="Badges Collection"
      subtitle="Total Points: 500"
      bg="bg-purple-50"
    />
    <PreferenceItem
      title="New Word"
      subtitle="Total: 500"
      bg="bg-blue-50"
    />
  </div>
);

const ActionCard = ({ icon, title, subtitle, borderColor, textColor }) => (
  <div
    className={`flex-1 bg-white rounded-2xl p-6 shadow border ${borderColor} cursor-pointer hover:scale-[1.02] transition`}
  >
    <div className={`text-xl mb-2 ${textColor}`}>{icon}</div>
    <p className={`font-semibold ${textColor}`}>{title}</p>
    <p className="text-sm text-gray-500">{subtitle}</p>
  </div>
);

/* ---------------- Small UI ---------------- */

const Input = ({ label, value }) => (
  <div className="space-y-1">
    <label className="text-[14px] text-black font-semibold">{label}</label>
    <input
      defaultValue={value}
      className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-200"
    />
  </div>
);

const StatMini = ({ value, label, highlight,textColor }) => (
  <div
  style={{
    background: highlight

  }}
    className={`px-7 py-2 rounded-xl text-center `}
  >
    <p
    style={{
        color:textColor
    }}
    className="text-2xl  font-semibold">{value}</p>
    <p className="text-[12px] mt-2">{label}</p>
  </div>
);

const PreferenceItem = ({ title, subtitle, bg }) => (
  <div className={`rounded-xl p-4 ${bg}`}>
    <p className="text-[18px] font-semibold text-gray-800">{title}</p>
    <p className="text-[14px] text-gray-600">{subtitle}</p>
  </div>
);

export default Profile;
