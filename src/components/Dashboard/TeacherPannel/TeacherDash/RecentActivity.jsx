import React, { useState } from "react";

const ActivityRow = ({ name, lastActive, dict, stories, image }) => {
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-[#F8F8F8] border border-[#EBEBEB]">
      <div className="flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="object-cover w-8 h-8 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-8 h-8 font-medium text-white bg-gray-300 rounded-full">
            {firstLetter}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="mt-1 text-xs text-gray-400 inter">
            Last active: {lastActive}
          </p>
        </div>
      </div>
      <div className="flex gap-6 text-sm text-gray-600">
        <span>{dict} dict. click</span>
        <span>{stories} stories</span>
      </div>
    </div>
  );
};

export default function RecentActivity({ activity }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(activity.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = activity.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="mt-8 p-4 bg-white border border-[#0000001A] rounded-xl">
      <h2 className="mb-4 text-base font-semibold">Recent Student Activity</h2>

      <div className="space-y-3">
        {currentItems.map((item) => (
          <ActivityRow key={item.id} {...item} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-1 text-sm font-medium text-gray-700">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
