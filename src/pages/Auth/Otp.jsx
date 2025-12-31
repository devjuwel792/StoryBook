import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CircleCheckBig } from "lucide-react";
import bgImg from "../../assets/bg.png";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add OTP validation here if needed
    navigate("/congratulations");
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

          <div className="px-8 py-10">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-32 h-32 flex items-center justify-center">
                <CircleCheckBig size={64} className="text-white" />
              </div>
              {/* Title */}
              <h1 className="text-4xl font-bold text-[#1E2939] mt-10">
                Email Sent! 📬
              </h1>
            </div>

            <div className="bg-gradient-to-b from-[#E6F3FF] to-[#F0FFF4] max-w-sm mx-auto border-2 border-[#87CEEB4D] rounded-2xl p-6 mb-6 flex items-center justify-center">
              {/* Instruction */}
              <p className="text-center text-[#364153] font-normal text-base">
                We've sent a password reset OTP to your email address.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-sm mx-auto"
            >
              {/* OTP Input */}
              <div>
                <div className="flex gap-4 justify-center">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[index] = el)}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onFocus={(e) => e.target.select()}
                      className={`w-24 h-14 rounded-2xl text-lg font-semibold text-center outline-none transition-all ${
                        data
                          ? "bg-teal-500 text-white shadow-lg scale-110"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:bg-teal-500 focus:text-white focus:shadow-lg focus:scale-110"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                Confirm OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
