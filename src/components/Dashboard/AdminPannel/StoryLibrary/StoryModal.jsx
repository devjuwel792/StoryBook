import React from "react";

const PAGE_SIZE = 8; // Number of lines per page

export default function StoryModal({ open, onClose, story, page, setPage }) {
  if (!open || !story) return null;

  // Split story into lines for pagination (simulate paragraphs)
  const lines = story.story ? story.story.split(/(?<=[.!?])\s+/g) : [];
  const totalPages = lines.length > 0 ? Math.ceil(lines.length / PAGE_SIZE) : 1;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageLines = lines.slice(start, end);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-6">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-xl outline outline-4 outline-offset-[-4px] outline-indigo-100/40 flex flex-col flex-1">
        {/* Title */}
        <div className="w-full max-w-2xl pb-3 mx-auto mt-9 border-b-2 border-gray-200 flex items-center px-4">
          <div className="text-neutral-950/50 text-3xl font-bold truncate">
            {story.title}
          </div>
        </div>
        {/* Story Content */}
        <div className="w-full max-w-2xl flex-1 px-4 pt-6 mx-auto mt-6 rounded-2xl flex flex-col items-start overflow-y-auto">
          {pageLines.length > 0 ? (
            pageLines.map((line, idx) => (
              <div
                key={idx}
                className="w-full pb-3 border-b-2 border-gray-200 text-gray-700/70 text-lg font-normal font-lora leading-10"
              >
                {line}
              </div>
            ))
          ) : (
            <div className="w-full text-center text-gray-400 py-10">
              No story content available.
            </div>
          )}
        </div>
        {/* Pagination */}
        <div className="w-full max-w-2xl h-12 mx-auto mt-5 mb-10 flex justify-between items-center px-4">
          <button
            className="w-40 h-12 bg-gradient-to-r from-red-200 to-orange-200 rounded-full shadow-lg flex items-center justify-center text-white text-base font-bold"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ← Previous Page
          </button>
          <div className="w-24 h-6 flex items-center justify-center">
            <span className="text-gray-600 text-base font-normal leading-6">
              Page {page} of {totalPages}
            </span>
          </div>
          <button
            className="w-40 h-12 bg-gradient-to-r from-gray-800 to-emerald-200 rounded-full shadow-lg flex items-center justify-center text-white text-base font-bold"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next Page →
          </button>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-6 right-8 text-2xl text-gray-400 hover:text-gray-700 font-bold"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}
