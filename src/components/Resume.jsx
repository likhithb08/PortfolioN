import React from "react";

const Resume = ({ isResumeShown }) => {
  return (
    <div>
      {!isResumeShown ? (
        <a
          href="public/Untitled (3).pdf"
          target="_self"
          rel="noopener noreferrer"
          className="bg-[#BF4408] text-white px-4 py-2 rounded-full font-bold hover:bg-[#A03807] transition-colors"
        >
          Resume
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Resume;
