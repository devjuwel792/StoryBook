import React, { useState, useMemo } from "react";
import { Check, X, Trash2 } from "lucide-react";
import { FiUserPlus } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import AddStudentModal from "./AddStudentModal";
import EditStudentModal from "./EditStudentModal";
export default function StudentManagementTable({ initialStudents = [] }) {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState("All Grades");
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const navigate = useNavigate();
  const handleView = () => {
    //    naviagate(`/dashboard/teacher/students/${id}`);
    navigate(`/dashboard/students/details`);
  };
  const handleEdit = () => {
    setOpenEdit(true);
  };

  //   const handleDelete = (id) => {
  //     setStudents((prev) => prev.filter((s) => s.id !== id));
  //   };
  const handleStatusChange = (id, status) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };
  // Get unique grades from the data and sort them
  const uniqueGrades = useMemo(() => {
    const grades = Array.from(new Set(students.map((s) => s.grade)));
    return grades.sort((a, b) => a - b);
  }, [students]);

  const filteredStudents = students
    .filter((s) => {
      const matchName = s.name.toLowerCase().includes(search.toLowerCase());
      const matchGrade = grade === "All Grades" || s.grade === Number(grade);
      return matchName && matchGrade;
    })
    .sort((a, b) => a.grade - b.grade); // Optional: sort students by grade

  return (
    <div className="mt-5 bg-white ">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search students..."
          className="w-2/3 px-3 py-2 text-sm border rounded-lg bg-[#F3F3F5]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-3 py-2 text-sm border rounded-lg bg-[#F3F3F5]"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option>All Grades</option>
          {uniqueGrades.map((g) => (
            <option key={g} value={g}>
              Grade {g}
            </option>
          ))}
        </select>

        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 ml-auto text-sm font-medium bg-[#E8CC13] rounded-lg flex items-center gap-2 text-green"
        >
          <FiUserPlus /> Add Students
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-[#0000001A] rounded-xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-[#272727] font-normal bg-white inter">
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
              <tr key={s.id} className="border-t hover:bg-gray-50">
                <td className="flex items-center gap-2 p-3">
                  <div className="flex items-center justify-center text-xs text-white bg-[#1F3A2B] rounded-full w-7 h-7">
                    {s.name.charAt(0)}
                  </div>
                  {s.name}
                </td>
                <td className="p-3 text-center">{s.grade}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      s.vocabulary === "Advanced"
                        ? "bg-green-100 text-green"
                        : s.vocabulary === "Intermediate"
                        ? "bg-[#E8CC1330] ]"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {s.vocabulary}
                  </span>
                </td>
                <td className="p-3 text-center text-[#059669]">
                  {s.dictionary}
                </td>
                <td className="p-3 text-center text-[#4A5565]">{s.story}</td>
                <td className="p-3 text-center text-[#4A5565]">{s.reading}</td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    {/* View Button */}
                    <button
                      onClick={handleView}
                      className="p-2 rounded hover:bg-green-100 text-[#4A5565] flex items-center justify-center"
                    >
                      <LuEye size={20} />
                    </button>

                    {/* Edit Button */}
                    <button
                      onClick={handleEdit}
                      className="p-2 rounded hover:bg-green-100 text-[#4A5565] flex items-center justify-center"
                    >
                      <MdOutlineModeEditOutline size={18} />
                    </button>

                    {/* Status Buttons or Badge */}
                    {s.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleStatusChange(s.id, "approved")}
                          className="flex items-center justify-center p-2 text-green-600 rounded hover:bg-green-100"
                        >
                          <Check size={18} />
                        </button>

                        <button
                          onClick={() => handleStatusChange(s.id, "rejected")}
                          className="flex items-center justify-center p-2 text-red-600 rounded hover:bg-red-100"
                        >
                          <X size={18} />
                        </button>
                      </>
                    )}

                    {s.status === "approved" && (
                      <span className="px-3 py-1 text-xs text-green-700 bg-green-100 rounded-full">
                        Approved
                      </span>
                    )}

                    {s.status === "rejected" && (
                      <span className="px-3 py-1 text-xs text-red-700 bg-red-100 rounded-full">
                        Rejected
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-400">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddStudentModal isOpen={open} onClose={() => setOpen(false)} />
      <EditStudentModal isOpen={openEdit} onClose={() => setOpenEdit(false)} />
    </div>
  );
}
