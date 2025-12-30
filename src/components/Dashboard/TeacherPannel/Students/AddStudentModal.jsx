import React, { useState } from "react";
import { X } from "lucide-react";
import { FiUsers } from "react-icons/fi";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function AddStudentModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) return null;
  const handleAddStudent = () => {
    toast.success("Student added successfully!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <Toaster position="top-center" />
      <div className="relative w-full max-w-5xl p-6 bg-white shadow-lg rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 text-white rounded-full green">
              <FiUsers />
            </div>
            <h2 className="text-lg font-medium text-[#1F1F1F] inter">
              Add New Student
            </h2>
          </div>

          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-red-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 border rounded-xl">
          {/* Grade */}
          <div className="flex items-center gap-16 mb-9">
            <div className="">
              <label className="block mb-2 text-base text-[#364153] font-medium">
                Select Your Grade
              </label>
              <div className="flex gap-3">
                {[3, 4, 5].map((g) => (
                  <button
                    key={g}
                    className="px-8 py-2 border bg-[#F3F4F6] rounded-lg hover:bg-gray-100"
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div className="">
              <label className="block mb-2 text-base text-[#364153] font-medium">
                Vocabulary Level
              </label>
              <select className="w-48 px-3 py-2 border rounded-lg border-[#E5E7EB]">
                <option>Select</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          {/* Vocabulary */}

          {/* Inputs */}
          <div className="grid items-end grid-cols-4 gap-6">
            <div>
              <label className="block mb-1 text-sm text-[#0A0A0A] font-semibold">
                Students Name:
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-[#0A0A0A] font-semibold">
                Students Mail:
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="student@gmail.com"
              />
            </div>

            <div className="relative">
              <label className="block mb-1 text-sm text-[#0A0A0A] font-semibold">
                Password:
              </label>

              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border rounded-lg"
                placeholder="********"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-500 -translate-y-1/2 right-3 top-[67%]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              onClick={handleAddStudent}
              className="px-4 py-2 text-white bg-gradient-to-r from-[#2B4839] to-[#92D1C1] rounded-lg hover:bg-green-700"
            >
              Add Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
