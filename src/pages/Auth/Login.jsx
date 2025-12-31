import { useState } from "react";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bgImg from "../../assets/bg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Teacher Login
    if (email === "teacher@gmail.com" && password === "teacher@gmail.com") {
      localStorage.setItem("role", "TEACHER");
      toast.success("Teacher login successful");
      navigate("/dashboard");
      return;
    }

    // ✅ Admin Login
    if (email === "admin@gmail.com" && password === "admin@gmail.com") {
      localStorage.setItem("role", "ADMIN");
      toast.success("Admin login successful");
      navigate("/dashboard");
      return;
    }
    if (email === "student@gmail.com" && password === "student@gmail.com") {
      localStorage.setItem("role", "student");
      toast.success("Admin login successful");
      navigate("/student-dashboard");
      return;
    }

    // ❌ Invalid credentials
    toast.error("Invalid email or password");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Overlay for opacity-50 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="flex items-center justify-center gap-10 px-24 py-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[524px]  overflow-hidden">
          <div className="p-14">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-16 h-16 flex items-center justify-center">
                <BookOpen className="text-white w-9 h-9" />
              </div>

              <h1 className="text-4xl font-bold text-[#1E2939]">
                Welcome Back! 👋
              </h1>

              <p className="text-[#4A5565] text-lg">
                Ready to read some amazing stories?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block mb-2 font-bold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-6 py-4 text-lg border rounded-2xl focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block mb-2 font-bold text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password..."
                  className="w-full px-6 py-4 text-lg border rounded-2xl focus:ring-2 focus:ring-teal-500 pr-12"
                  required
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

              {/* Forgot Password */}
              <p className="text-right text-[#87CEEB] font-bold">
                <a href="/forgot">Forgot Password?</a>
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-lg py-4 rounded-2xl shadow-lg"
              >
                Log in
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Are you a parent or teacher?{" "}
              <a href="/login" className="text-[#87CEEB] hover:underline">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
