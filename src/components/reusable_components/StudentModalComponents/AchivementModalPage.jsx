import React from 'react';
import { FaStar } from 'react-icons/fa6';

const AchivementModalPage = ({data}) => {
      const {icon, title, description, points, iconBg, shadowColor, status} = data
    return (
        <div>
                   <div 
                  
                     className="rounded-xl p-4 flex items-center justify-center flex-col gap-4 text-center transition-transform hover:scale-[1.02]"
                     style={{ 
                      
                       background: status === "locked" ? "#F3F4F6" : "white",
                       opacity: status === "locked" ? 0.7 : 1
                     }}
                   >
                     <div 
                       className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-lg"
                       style={{ background: iconBg }}
                     >
                       {React.isValidElement(icon) 
                         ? React.cloneElement(icon, { className: "text-white text-2xl" })
                         : <span className="text-2xl">{icon}</span>
                       }
                     </div>
                 
                     <p className="text-sm font-semibold text-gray-800">{title}</p>
                     <p className="text-[12px] text-gray-600">{description}</p>
                     
                     {status === "earned" ? (
                       <>
                         <p className="text-xs font-semibold flex justify-center items-center gap-1 text-[#87CEEB]">
                           <FaStar /> Earned
                         </p>
                         <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                           + {points}
                         </span>
                       </>
                     ) : (
                       <>
                         <p className="text-xs font-semibold flex justify-center items-center gap-1 text-gray-400">
                           <FaStar /> Locked
                         </p>
                         <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                           🔒 {points}
                         </span>
                       </>
                     )}
                   </div>
        </div>
    );
};

export default AchivementModalPage;