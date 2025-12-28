import { useState } from "react";
import { BookOpen, Shield, Sparkles } from "lucide-react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #1F3A2B, #98D8C8, rgba(255,255,255,0.8))",
      }}
    >
      <div className="py-20 px-24 flex items-center justify-start gap-10">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[524px] h-[888px] overflow-hidden">
          <div className="p-14">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-16 h-16 flex items-center justify-center">
                <BookOpen className="w-9 h-9 text-white" />
              </div>
              {/* Title */}
              <h1 className="text-4xl font-bold text-[#1E2939]">
                Welcome Back! 👋
              </h1>

              {/* Subtitle */}
              <p className=" text-[#4A5565] text-lg font-normal">
                Ready to read some amazing stories?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="flex items-center gap-2 font-bold text-base text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="flex items-center gap-2 font-bold text-base text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  required
                />
              </div>
              {/* Forgot Password Link */}
              <div>
                <p className="text-base font-bold text-right text-[#87CEEB] mt-1 pl-1">
                  <a href="/forgot">Forgot Password?</a>
                </p>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                Log in
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center font-normal text-base text-gray-600 mt-6">
              Are you a parent or teacher?{" "}
              <a
                href="/login"
                className="text-[#87CEEB] font-medium hover:underline"
              >
                Click here
              </a>
            </p>
          </div>
        </div>

        <div>Image</div>
      </div>
    </div>
  );
};

export default Login;
