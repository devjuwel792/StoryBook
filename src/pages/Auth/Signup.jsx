import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Mail,
  Lock,
  User,
  Shield,
  Sparkles,
  EyeOff,
  Eye,
} from "lucide-react";
import bgImg from "../../assets/bg.png";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full min-h-screen object-cover z-0"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Overlay for opacity-50 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"/>
      <div className="py-20 px-24 flex items-center justify-center gap-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">
          {/* Back Button */}
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 text-sm px-6 pt-6 hover:text-gray-800 transition">
            <ArrowLeft size={16} />
            <p className="font-semibold text-base">Back to Home</p>
          </button>

          <div className="px-8 pt-6 pb-10">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-16 h-16 flex items-center justify-center">
                <BookOpen className="w-9 h-9 text-white" />
              </div>
              {/* Title */}
              <h1 className="text-4xl font-bold text-[#1E2939]">
                Join the Adventure! 🚀
              </h1>

              {/* Subtitle */}
              <p className=" text-[#4A5565] text-lg font-normal">
                Create your free account and start reading!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="flex items-center gap-2 font-bold text-base text-gray-700 mb-2">
                  <User size={16} className="text-teal-600" />
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
                  <Mail size={16} className="text-teal-600" />
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  required
                />
                <p className="text-xs text-gray-500 font-normal mt-1 pl-1">
                  We'll send updates to your parent or teacher
                </p>
              </div>

              {/* Grade Selection */}
              <div>
                <label className="block font-bold text-base text-gray-700 mb-3">
                  Select Your Grade
                </label>
                <div className="flex gap-4 justify-center">
                  {[1, 2, 3, 4, 5].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGrade(g)}
                      className={`w-24 h-14 rounded-2xl text-lg font-semibold transition-all ${
                        grade === g
                          ? "bg-teal-500 text-white shadow-lg scale-110"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <label className="flex items-center gap-2 font-bold text-base text-gray-700 mb-2">
                  <Lock size={16} className="text-teal-600" />
                  Create a Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition pr-12"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="absolute right-4 top-16 -translate-y-1/2 text-gray-400 hover:text-teal-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff color="#99A1AF" /> : <Eye color="#99A1AF" />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="flex items-center gap-2 font-bold text-base text-gray-700 mb-2">
                  <Lock size={16} className="text-teal-600" />
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Type your password again..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition pr-12"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="absolute right-4 top-16 -translate-y-1/2 text-gray-400 hover:text-teal-600"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff color="#99A1AF" /> : <Eye color="#99A1AF" />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <Sparkles color="#FFFFFF" />
                Create My Account!
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center font-normal text-base text-gray-600 mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-teal-600 font-medium hover:underline"
              >
                Sign In
              </a>
            </p>

            {/* Security Note */}
            <div className="mt-8 bg-teal-50 rounded-2xl p-4 flex items-center justify-center gap-3">
              <Shield className="text-teal-600" size={20} />
              <p className="text-sm font-normal text-[#364153]">
                <strong>Safe & Secure:</strong> We protect your information and
                never share it with anyone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
