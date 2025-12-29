import React from "react";

const StatsCard = ({ title, value, subtitle, icon: Icon }) => {
  return (
    <div
      className={`flex items-start justify-between rounded-xl p-6 bg-white border border-[#0000001A]`}
    >
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
        <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className="p-3 rounded-lg shadow yellow">
        {Icon && <Icon size={18} className="text-gray-700" />}
      </div>
    </div>
  );
};

export default StatsCard;
