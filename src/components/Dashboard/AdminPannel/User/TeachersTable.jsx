import { Pencil, Trash2 } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "S",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "A",
    status: "Active",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "M",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "B",
    status: "Active",
  },
  {
    id: 3,
    name: "Emma Williams",
    avatar: "E",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "C",
    status: "Active",
  },
  {
    id: 4,
    name: "David Brown",
    avatar: "D",
    totalStudent: 4,
    lastActivity: "2 hours ago",
    grade: "A",
    status: "Active",
  },
];

export default function TeachersTable({ searchQuery = "", selectedGrade = "all" }) {
  const filteredData = students.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = selectedGrade === "all" || item.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="overflow-x-auto bg-white rounded-xl border">
      <table className="w-full text-sm">
        <thead className="border-b bg-gray-50 text-gray-600">
          <tr className="text-center">
            <th className="px-6 py-4 font-medium text-left align-middle">Name</th>
            <th className="px-6 py-4 font-medium text-center align-middle">Total student</th>
            <th className="px-6 py-4 font-medium text-center align-middle">Last Activity</th>
            <th className="px-6 py-4 font-medium text-center align-middle">Grade</th>
            <th className="px-6 py-4 font-medium text-center align-middle">Status</th>
            <th className="px-6 py-4 font-medium text-center align-middle">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {filteredData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 text-center align-middle">
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
                <Pencil size={16} className="cursor-pointer text-gray-600 hover:text-black" />
                <Trash2 size={16} className="cursor-pointer text-red-500 hover:text-red-700" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
