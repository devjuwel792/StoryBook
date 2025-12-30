import React, { useState } from "react";
import { Check, X, Trash2 } from "lucide-react";

const initialStudents = [
  {
    id: 1,
    name: "Sarah Johnson",
    grade: 4,
    vocabulary: "Intermediate",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "pending",
  },
  {
    id: 2,
    name: "Mike Chen",
    grade: 4,
    vocabulary: "Advanced",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "approved",
  },
  {
    id: 3,
    name: "Emma Williams",
    grade: 4,
    vocabulary: "Beginner",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "pending",
  },
  {
    id: 4,
    name: "David Brown",
    grade: 4,
    vocabulary: "Advanced",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "pending",
  },
  {
    id: 5,
    name: "Liam Anderson",
    grade: 4,
    vocabulary: "Intermediate",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "rejected",
  },
  {
    id: 6,
    name: "James Wilson",
    grade: 4,
    vocabulary: "Intermediate",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "pending",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    grade: 4,
    vocabulary: "Beginner",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "pending",
  },
  {
    id: 8,
    name: "Oliver Davis",
    grade: 5,
    vocabulary: "Advanced",
    dictionary: 12,
    story: 10,
    reading: 35,
    status: "approved",
  },
];

export default function UserManagement() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState("All Grades");

  const handleStatus = (id, status) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const filteredStudents = students.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());
    const matchGrade = grade === "All Grades" || s.grade === Number(grade);
    return matchName && matchGrade;
  });

  return (
    <div className="p-6 bg-white rounded-xl border border-[#0000001A]">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-[#1F1F1F]">
          User Management
        </h1>
        <p className="text-sm text-gray-500">View and manage all users</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search students..."
          className="px-3 py-2 text-sm border rounded-lg w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-3 py-2 text-sm border rounded-lg"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option>All Grades</option>
          <option value="4">Grade 4</option>
          <option value="5">Grade 5</option>
        </select>

        <button className="px-4 py-2 ml-auto text-sm font-medium bg-yellow-400 rounded-lg">
          + Add Students
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-gray-500 bg-gray-50">
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
            {filteredStudents.map((s) => (
              <tr key={s.id} className="transition border-t hover:bg-gray-50">
                <td className="flex items-center gap-2 p-3">
                  <div className="flex items-center justify-center text-xs text-white bg-black rounded-full w-7 h-7">
                    {s.name.charAt(0)}
                  </div>
                  {s.name}
                </td>

                <td className="p-3 text-center">{s.grade}</td>

                <td className="p-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      s.vocabulary === "Advanced"
                        ? "bg-green-100 text-green-600"
                        : s.vocabulary === "Intermediate"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {s.vocabulary}
                  </span>
                </td>

                <td className="p-3 text-center text-green-600">
                  {s.dictionary}
                </td>
                <td className="p-3 text-center">{s.story}</td>
                <td className="p-3 text-center">{s.reading}</td>

                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleStatus(s.id, "approved")}
                      className="p-1 text-green-600 rounded hover:bg-green-100"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleStatus(s.id, "rejected")}
                      className="p-1 text-red-600 rounded hover:bg-red-100"
                    >
                      <X size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="p-1 text-gray-500 rounded hover:bg-gray-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <p className="py-6 text-sm text-center text-gray-400">
            No students found
          </p>
        )}
      </div>
    </div>
  );
}
