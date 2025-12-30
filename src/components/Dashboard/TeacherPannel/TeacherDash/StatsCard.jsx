import React from "react";

const StatsCard = ({ title, value, subtitle, icon: Icon,id }) => {
  return (
    <div
      className={`flex items-start justify-between rounded-xl p-6 bg-white border border-[#0000001A]`}
    >
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
        <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className={`p-3 rounded-lg shadow ${id%2 !== 0 ? "yellow text-gray-700":"bg-[#1F3A2B] text-white"}`}>
        {Icon && <Icon size={18} />}
      </div>
    </div>
  );
};

export default StatsCard;
