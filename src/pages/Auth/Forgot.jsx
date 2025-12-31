import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import bgImg from "../../assets/bg.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your API call here if needed
    navigate("/otp");
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
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="py-20 px-24 flex items-center justify-center gap-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl h-[906px] overflow-hidden">
          {/* Back Button */}
          <button
            type="button"
            className="flex items-center gap-2 text-gray-600 text-sm px-6 pt-6 hover:text-gray-800 transition"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            <p className="font-semibold text-base">Back to Home</p>
          </button>

          <div className="px-8 pt-6 pb-10">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-24 h-24 flex items-center justify-center">
                <Mail size={48} className="text-white" />
              </div>
              {/* Title */}
              <h1 className="text-4xl font-bold text-[#1E2939]">
                Forgot Password? 🤔
              </h1>

              {/* Subtitle */}
              <p className=" text-[#4A5565] text-lg font-normal">
                No worries! We'll help you reset it.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#E6F3FF] to-[#F0FFF4] max-w-sm mx-auto border-2 border-[#87CEEB4D] rounded-2xl p-6 mb-6 flex items-center justify-center">
              {/* Instruction */}
              <p className="text-center text-[#364153] font-normal text-base">
                📧 Enter your email address below, and we'll send them OTP to
                reset your password!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-sm mx-auto"
            >
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
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
