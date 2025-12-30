import React, { useState } from "react";
import PersonalInfo from "./_components/PersonalInfo";
import Terms from "./_components/Terms";
import Privacy from "./_components/Privacy";

const Header = ({active}) => {
  console.log(active,'sss')
  return (
    <div className="flex w-[80vw] mx-auto justify-between items-center">
      <div className="">
        <p className="text-[28px] text-[#1F1F1F] font-semibold">Settings</p>
        <p className="text-[16px] text-[#4A5565]">
          Manage platform preferences and configurations
        </p>
      </div>
{
  active !== 0 && (
          <button
        className="px-5 py-2 rounded-2xl text-white font-medium hover:opacity-90 transition-opacity"
        style={{
          background: "linear-gradient(90deg, #294637 0%, #95D4C4 100%)",
        }}
      >
        Save Changes
      </button>
  )
}
    </div>
  );
};

const Settings = () => {
  const [active, setActive] = useState(0); 
  
  const tabOptions = ['General', 'Terms & Conditions', 'Privacy Policy']; 

    const renderComponent =()=>{
        if(active === 0){
            return <PersonalInfo />
        }
        else if(active === 1){
            return <Terms />
        }
        else{
            return <Privacy />
        }
    }


  return (
    <div className="p-4">
     
      <div className="mb-8">
        <Header active={active} />
      </div>

      <div className="grid grid-cols-3 w-[80vw] mx-auto justify-items-center bg-[#ECECF0] p-1 rounded-lg">
        {tabOptions.map((item, index) => (
          <button
            key={index} 
            onClick={() => setActive(index)}
            className={`px-6 py-1 rounded-2xl w-full text-center transition-all ${
              index === active 
                ? 'bg-white rounded-2xl shadow-sm font-medium' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      
        <div className="px-12 mt-10">
        {renderComponent()}
        </div>
    </div>
  );
};

export default Settings;