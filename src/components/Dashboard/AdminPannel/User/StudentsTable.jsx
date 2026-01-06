import { Check, Eye, Pencil, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditUserModal from "./EditUserModal";

const initialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "S",
    grade: 4,
    vocabulary: "Intermediate",
    dictionary: 12,
    story: 10,
    readingLevel: "3/5",
    decision: null,
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@example.com",
    avatar: "M",
    grade: 4,
    vocabulary: "Advanced",
    dictionary: 12,
    story: 10,
    readingLevel: "3/5",
    decision: "approved",
  },
  {
    id: 3,
    name: "Emma Williams",
    email: "emma@example.com",
    avatar: "E",
    grade: 4,
    vocabulary: "Beginner",
    dictionary: 12,
    story: 10,
    readingLevel: "3/5",
    decision: null,
  },
];

export default function StudentsTable({
  searchQuery = "",
  selectedGrade = "all",
}) {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDecision = (id, value) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, decision: value } : item))
    );
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGrade =
      selectedGrade === "all" || item.grade.toString() === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="overflow-x-auto border border-[#0000001A] rounded-xl">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-[#272727] font-normal bg-white headerFont text-xs">
            <th className="p-3 text-left">Name</th>
            <th className="p-3">Grade</th>
            <th className="p-3">Vocabulary</th>
            <th className="p-3">Dictionary</th>
            <th className="p-3">Story</th>
            <th className="p-3">Reading Level</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50 normalFont">
              <td className="flex items-center gap-2 p-3">
                <div className="flex items-center justify-center text-xs text-white bg-[#1F3A2B] rounded-full w-7 h-7">
                  {item.name.charAt(0)}
                </div>
                {item.name}
              </td>

              <td className="p-3 text-center">{item.grade}</td>

              <td className="p-3 text-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    item.vocabulary === "Advanced"
                      ? "bg-green-100 text-green-700"
                      : item.vocabulary === "Intermediate"
                      ? "bg-[#E8CC1330] text-yellow-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.vocabulary}
                </span>
              </td>

              <td className="p-3 text-center text-[#059669]">
                {item.dictionary}
              </td>

              <td className="p-3 text-center text-[#4A5565]">{item.story}</td>

              <td className="p-3 text-center text-[#4A5565]">
                {item.readingLevel}
              </td>

              <td className="p-3">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => navigate("/dashboard/students/details")}
                    className="p-2 rounded hover:bg-green-100 text-[#4A5565] flex items-center justify-center"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedUser(item);
                      setOpen(true);
                    }}
                    className="p-2 rounded hover:bg-green-100 text-[#4A5565] flex items-center justify-center"
                  >
                    <Pencil size={18} />
                  </button>

                  {/* decision logic */}
                  {item.decision === null && (
                    <>
                      <button
                        onClick={() => handleDecision(item.id, "approved")}
                        className="flex items-center justify-center p-2 text-green-600 rounded hover:bg-green-100"
                      >
                        <Check size={18} />
                      </button>
                      <button
                        onClick={() => handleDecision(item.id, "rejected")}
                        className="flex items-center justify-center p-2 text-red-600 rounded hover:bg-red-100"
                      >
                        <X size={18} />
                      </button>
                    </>
                  )}

                  {item.decision === "approved" && (
                    <span className="px-3 py-1 text-xs text-green-700 bg-green-100 rounded-full">
                      Approved
                    </span>
                  )}

                  {item.decision === "rejected" && (
                    <span className="px-3 py-1 text-xs text-red-700 bg-red-100 rounded-full">
                      Rejected
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={7} className="py-6 text-center text-gray-400">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <EditUserModal
        isOpen={open}
        onClose={() => setOpen(false)}
        userData={selectedUser}
      />
    </div>
  );
}
