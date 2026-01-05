import React from "react";
import { Users, BookOpen, Search } from "lucide-react";
import StatsCard from "../TeacherPannel/TeacherDash/StatsCard";
import RecentActivity from "../TeacherPannel/TeacherDash/RecentActivity";

export default function AdminDashboard() {
  // ---------------- Fake Data ----------------
  const statsData = [
    {
      title: "Total Students",
      value: 8,
      subtitle: "12 active this week",
      icon: Users,
    },
    {
      title: "Total Story",
      value: 416,
      subtitle: "Avg 52 per student",
      icon: BookOpen,
    },
    {
      title: "Dictionary Average",
      value: 26,
      subtitle: "Average per student",
      icon: BookOpen,
    },
    {
      title: "Vocabulary Search",
      value: 118,
      subtitle: "New words this week",
      icon: Search,
    },
  ];

  const activityData = [
    {
      id: 1,
      name: "Ethan Davis",
      lastActive: "5 min ago",
      dict: 25,
      stories: 12,
      image: "",
    },
    {
      id: 2,
      name: "Olivia Smith",
      lastActive: "12 min ago",
      dict: 30,
      stories: 15,
      image: "",
    },
    {
      id: 3,
      name: "Liam Johnson",
      lastActive: "20 min ago",
      dict: 22,
      stories: 18,
      image: "",
    },
    {
      id: 4,
      name: "Sophia Brown",
      lastActive: "25 min ago",
      dict: 28,
      stories: 20,
      image: "",
    },
    {
      id: 5,
      name: "Noah Wilson",
      lastActive: "30 min ago",
      dict: 18,
      stories: 14,
      image: "",
    },
    {
      id: 6,
      name: "Ava Martinez",
      lastActive: "35 min ago",
      dict: 32,
      stories: 21,
      image: "",
    },
    {
      id: 7,
      name: "James Anderson",
      lastActive: "40 min ago",
      dict: 27,
      stories: 17,
      image: "",
    },
    {
      id: 8,
      name: "Isabella Thomas",
      lastActive: "45 min ago",
      dict: 24,
      stories: 19,
      image: "",
    },
    {
      id: 9,
      name: "Lucas Taylor",
      lastActive: "50 min ago",
      dict: 29,
      stories: 16,
      image: "",
    },
    {
      id: 10,
      name: "Mia Moore",
      lastActive: "55 min ago",
      dict: 26,
      stories: 13,
      image: "",
    },
  ];

  // ---------------- Render ----------------
  return (
    <div className="px-6 headerFont">
      <h1 className="text-2xl font-semibold text-[#1F1F1F]">Admin Dashboard</h1>
      <p className="mt-1 text-base text-[#4A5565]">
        Welcome back! Here's what's happening with your students.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((item, idx) => (
          <StatsCard key={idx} id={idx} {...item} />
        ))}
      </div>

      {/* Recent Activity */}
      <RecentActivity activity={activityData} />
    </div>
  );
}
