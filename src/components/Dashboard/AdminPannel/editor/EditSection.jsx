import React, { useRef, useState } from "react";
import Quill from "quill";
import Editor from "./Editor";



const EditSection = ({ data, section }) => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);


  const quillRef = useRef(null);

  // Extract the actual content from the API response
  const getContentFromData = () => {
    if (!data) return "";
    
    // If data has a 'text' property, use that
    if (typeof data === 'object' && data.text) {
      return data.text;
    }
    
    // If data is already a string, use it directly
    if (typeof data === 'string') {
      return data;
    }
    
    return "";
  };

  const handleUpdate = async () => {
     const content = quillRef.current?.root.innerHTML || "";
  };

  // const isLoading = section === "terms" ? isTermsLoading : isPrivacyLoading;

  return (
    <div
      className="flex bg-white flex-col gap-4 p-3 relative"
      style={{
        minHeight: "500px",
        boxShadow: "0px 0px 10px 0px #0000001A",
      }}
    >
      <Editor
        ref={quillRef}
        readOnly={readOnly}
        defaultValue={getContentFromData()} // Use the extracted content
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      />

      {/* Update button */}
      <div className="flex justify-end right-5 absolute top-5">
        {/* <button
          style={{ background: "#343F4F" }}
       

          className="px-5 py-1 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
Update
        </button> */}
      </div>
    </div>
  );
};

export default EditSection;