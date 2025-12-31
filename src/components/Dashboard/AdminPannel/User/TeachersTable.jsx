import { Pencil, Trash2 } from "lucide-react";
import EditUserModal from "./EditUserModal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const students = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "S",
    email: "sarah@example.com",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "A",
    status: "Active",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "M",
    email: "mike@example.com",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "B",
    status: "Active",
  },
  {
    id: 3,
    name: "Emma Williams",
    avatar: "E",
    email: "emma@example.com",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "C",
    status: "Active",
  },
  {
    id: 4,
    name: "David Brown",
    avatar: "D",
    email: "david@example.com",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "A",
    status: "Active",
  },
];

export default function TeachersTable({
  searchQuery = "",
  selectedGrade = "all",
}) {
  const [tableData, setTableData] = useState(students);

  const filteredData = tableData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGrade =
      selectedGrade === "all" || item.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-gray-800">
            Are you sure you want to delete?
          </p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setTableData((prev) => prev.filter((item) => item.id !== id));
                toast.dismiss(t.id);
                toast.success("Deleted successfully");
              }}
              className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  return (
    <div className="overflow-x-auto bg-white rounded-xl border">
      <Toaster />
      <table className="w-full text-sm">
        <thead className="border-b bg-gray-50 text-gray-600">
          <tr className="text-center">
            <th className="px-6 py-4 font-medium text-left align-middle">
              Name
            </th>
            <th className="px-6 py-4 font-medium text-center align-middle">
              Total student
            </th>
            <th className="px-6 py-4 font-medium text-center align-middle">
              Last Activity
            </th>
            <th className="px-6 py-4 font-medium text-center align-middle">
              Grade
            </th>
            <th className="px-6 py-4 font-medium text-center align-middle">
              Status
            </th>
            <th className="px-6 py-4 font-medium text-center align-middle">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {filteredData.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 text-center align-middle"
            >
              {/* Name */}
              <td className="px-6 py-4 flex items-center gap-3 justify-start align-middle">
                <div className="w-9 h-9 rounded-full bg-green-900 text-white flex items-center justify-center font-semibold">
                  {item.avatar}
                </div>
                <span className="font-medium">{item.name}</span>
              </td>

              {/* Total student */}
              <td className="px-6 py-4 align-middle">{item.totalStudent}</td>

              {/* Last activity */}
              <td className="px-6 py-4 text-gray-500 align-middle">
                {item.lastActivity}
              </td>

              {/* Grade */}
              <td className="px-6 py-4 font-semibold text-green-600 align-middle">
                {item.grade}
              </td>

              {/* Status */}
              <td className="px-6 py-4 align-middle">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  {item.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-6 py-4 flex items-center gap-4 justify-center align-middle">
                <Pencil
                  size={16}
                  onClick={() => {
                    setSelectedUser(item);
                    setOpen(true);
                  }}
                  className="cursor-pointer text-gray-600 hover:text-black"
                />
                <Trash2
                  size={16}
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer text-red-500 hover:text-red-700"
                />
              </td>
            </tr>
          ))}
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
