import { ArrowLeft, CircleCheckBig } from "lucide-react";
import { useNavigate } from "react-router";
import bgImg from "../../assets/bg.png";

const Congratulations = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your API call here if needed
    navigate("/login");
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
      <div className="flex flex-col min-h-screen items-center justify-center px-24 gap-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-44 overflow-hidden flex items-center justify-center">
          <div className="px-8 py-10">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-32 h-32 flex items-center justify-center">
                <CircleCheckBig size={64} className="text-white" />
              </div>
              {/* Title */}
              <h1 className="text-4xl font-bold text-[#1E2939] mt-10">
                Congratulations!
              </h1>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-96 mx-auto bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              Go To Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
