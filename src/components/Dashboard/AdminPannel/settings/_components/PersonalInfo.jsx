import React from "react";

const PersonalInfo = () => {
  return (
    <div className="max-w-8xl bg-white rounded-2xl border border-gray-200 p-9">
      {/* Title */}
      <h2 className="text-sm font-medium text-gray-900 mb-6 headerFont">
        Platform Information
      </h2>

      {/* Form */}
      <div className="space-y-6">
        {/* Platform Name */}
        <div>
          <label className="block text-[10px] font-medium text-gray-700 mb-1 headerFont">
            Platform Name
          </label>
          <input
            type="text"
            value="LiteracyHub"
            readOnly
            className="w-full rounded-md bg-gray-100 px-4 py-4 text-gray-900 text-sm outline-none normalFont"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-[10px] font-medium text-gray-700 mb-1 headerFont">
            Contact Email
          </label>
          <input
            type="email"
            value="admin@literacyhub.com"
            readOnly
            className="w-full rounded-md bg-gray-100 px-4 py-4 text-gray-900 text-sm outline-none normalFont"
          />
        </div>

        {/* Support Email */}
        <div>
          <label className="block text-[10px] font-medium text-gray-700 mb-1 headerFont">
            Support Email
          </label>
          <input
            type="email"
            value="support@literacyhub.com"
            readOnly
            className="w-full rounded-md bg-gray-100 px-4 py-4 text-gray-900 text-sm outline-none normalFont"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
