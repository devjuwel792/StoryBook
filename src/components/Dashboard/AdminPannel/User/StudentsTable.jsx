import { Check, Eye, Pencil, X } from "lucide-react";
import { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "Sarah Johnson",
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
    avatar: "E",
    grade: 4,
    vocabulary: "Beginner",
    dictionary: 12,
    story: 10,
    readingLevel: "3/5",
    decision: null,
  },
];

export default function StudentsTable({ searchQuery = "", selectedGrade = "all" }) {
  const [data, setData] = useState(initialData);

  const handleDecision = (id, value) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, decision: value } : item))
    );
  };

  const badgeColor = {
    Beginner: "bg-gray-100 text-gray-600",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-green-100 text-green-700",
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = selectedGrade === "all" || item.grade.toString() === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="bg-white border rounded-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b text-gray-600">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4">Grade</th>
            <th className="px-6 py-4">Vocabulary</th>
            <th className="px-6 py-4">Dictionary</th>
            <th className="px-6 py-4">Story</th>
            <th className="px-6 py-4">Reading Level</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {filteredData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-900 text-white flex items-center justify-center font-semibold">
                  {item.avatar}
                </div>
                {item.name}
              </td>

              <td className="px-6 py-4 text-center">{item.grade}</td>

              <td className="px-6 py-4 text-center align-middle">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    badgeColor[item.vocabulary]
                  }`}
                >
                  {item.vocabulary}
                </span>
              </td>

              <td className="px-6 py-4 text-green-600 text-center">
                {item.dictionary}
              </td>

              <td className="px-6 py-4 text-center">{item.story}</td>

              <td className="px-6 py-4 text-center">{item.readingLevel}</td>

              <td className="px-6 py-4 flex items-center justify-center gap-3">
                <Eye className="cursor-pointer text-gray-600" />
                <Pencil className="cursor-pointer text-gray-600" />

                {/* decision logic */}
                {item.decision === null && (
                  <>
                    <Check
                      onClick={() => handleDecision(item.id, "approved")}
                      className="cursor-pointer text-green-600"
                    />
                    <X
                      onClick={() => handleDecision(item.id, "rejected")}
                      className="cursor-pointer text-red-500"
                    />
                  </>
                )}

                {item.decision === "approved" && (
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    Approved
                  </span>
                )}

                {item.decision === "rejected" && (
                  <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                    Rejected
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
