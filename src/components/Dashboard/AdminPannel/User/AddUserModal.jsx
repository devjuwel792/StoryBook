import { UserPlus } from "lucide-react";
import { useState } from "react";

export default function AddUserModal({ isOpen, onClose }) {
  const [userType, setUserType] = useState("student");

  if (!isOpen) return null;

  const handleSave = () => {
    // For static frontend, closing the modal resets the form state
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 px-3 pt-3 bg-yellow-400/10 rounded-[10px] inline-flex flex-col justify-start items-start">
              <UserPlus color="#1F3A2B" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Add New User</h2>
              <p className="text-sm text-gray-500">
                Create a new student or teacher account
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 text-xl">
            ✕
          </button>
        </div>

        {/* User Type */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">User Type</p>

          <div className="flex gap-4">
            <TypeCard
              label="Student"
              active={userType === "student"}
              onClick={() => setUserType("student")}
            />
            <TypeCard
              label="Teacher"
              active={userType === "teacher"}
              onClick={() => setUserType("teacher")}
            />
          </div>
        </div>

        {/* Form */}
        {userType === "student" ? <StudentForm /> : <TeacherForm />}

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-zinc-800 rounded-[10px] text-zinc-800 text-base font-normal"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gradient-to-r from-[#2B4839] to-[#95D3C3] text-white rounded-[10px] text-base font-normal"
          >
            {userType === "student" ? "Add Student" : "Add Teacher"}
          </button>
        </div>
      </div>
    </div>
  );
}

function TypeCard({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex-1 cursor-pointer border rounded-lg p-4 text-center
        ${active ? "border-[#1F3A2B] bg-[#1F3A2B]/5" : "border-gray-200"}
      `}
    >
      <div className="text-2xl mb-1">{label === "Student" ? "🧒" : "👩‍🏫"}</div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}

function StudentForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input label="Full Name" placeholder="Enter student name" />
        <Input label="Email" placeholder="Enter student email" />
      </div>

      <Input label="Grade Level" />
      <Input label="Vocabulary Level" />
    </div>
  );
}

function TeacherForm() {
  return (
    <div className="space-y-4">
      <Input label="Full Name" placeholder="Enter teacher name" />
      <Input label="Email" placeholder="Enter teacher email" />
      <Input label="Grade Level" />
    </div>
  );
}

function Input({ label, placeholder = "" }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label} *</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
      />
    </div>
  );
}
