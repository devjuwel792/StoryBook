import { useEffect, useState, useRef } from "react";

export default function EditUserModal({ isOpen, onClose, userData }) {
  const [formData, setFormData] = useState(() => ({
    name: userData?.name || "",
    email: userData?.email || "",
    grade: userData?.grade || "",
    vocabulary: userData?.vocabulary || "",
  }));

  // Track the last userData ID to detect when we're editing a different user
  const lastUserIdRef = useRef(userData?.id);

  // Only update when userData actually changes (different user)
  useEffect(() => {
    if (userData && userData.id !== lastUserIdRef.current) {
      lastUserIdRef.current = userData.id;
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        grade: userData.grade || "",
        vocabulary: userData.vocabulary || "",
      });
    }
  }, [userData]);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle save action
  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving user data:", formData);
    // For static frontend, closing the modal resets the form state
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div>
              <h2 className="text-lg font-semibold">Edit User</h2>
              <p className="text-sm text-gray-500">
                Update user account information
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 text-xl">
            ✕
          </button>
        </div>

        {/* Form */}
        <UserForm formData={formData} handleInputChange={handleInputChange} />

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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function UserForm({ formData, handleInputChange }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Full Name"
          placeholder="Enter user name"
          value={formData.name}
          onChange={(value) => handleInputChange("name", value)}
        />
        <Input
          label="Email"
          placeholder="Enter user email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
      </div>

      <Input
        label="Grade Level"
        value={formData.grade}
        onChange={(value) => handleInputChange("grade", value)}
      />
      <Input
        label="Vocabulary Level"
        value={formData.vocabulary}
        onChange={(value) => handleInputChange("vocabulary", value)}
      />
    </div>
  );
}

function Input({ label, placeholder = "", value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label} *</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600"
      />
    </div>
  );
}
