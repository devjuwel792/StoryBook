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
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Overlay for opacity-50 */}
      <div className="fixed inset-0 bg-black opacity-50 z-10" />
      <div className="flex flex-col min-h-screen items-center justify-center px-4 md:px-24 gap-10 relative z-20 py-8 md:py-0">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-8 md:p-20 lg:p-44 overflow-hidden flex items-center justify-center">
          <div className="w-full flex flex-col items-center">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                <CircleCheckBig className="text-white w-10 h-10 md:w-16 md:h-16" />
              </div>
              {/* Title */}
              <h1 className="headerFont text-xl md:text-2xl font-bold text-[#1E2939] mt-6 md:mt-10 text-center">
                Congratulations!
              </h1>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full headerFont sm:w-96 mx-auto bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-xs md:text-sm py-3 md:py-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
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
