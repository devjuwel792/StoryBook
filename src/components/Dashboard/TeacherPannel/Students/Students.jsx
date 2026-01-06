import React from "react";
import StudentManagementTable from "./StudentManagement";
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

export default function Students() {
  return (
    <div className="px-6 ">
      <div>
        <h1 className="text-lg font-semibold text-[#1F1F1F] headerFont">
          Student Management
        </h1>
        <p className="mt-1 text-base text-[#4A5565] normalFont">
          View and manage all students
        </p>
      </div>
      <StudentManagementTable initialStudents={initialStudents} />
    </div>
  );
}
