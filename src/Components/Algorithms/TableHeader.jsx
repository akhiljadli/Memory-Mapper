import React from "react";

const TableHeader = ({ algoName }) => {
  return (
    <div className="w-full h-full bg-[#1a202c] flex flex-col items-center justify-center mt-10">
      <div>
        <h1 className="text-4xl md:text-5xl text-white">{algoName}</h1>
      </div>
      {/* 
      <div className="mt-8 text-white space-y-2">
        <p className="text-lg">Frames: {frame}</p>
        <p className="text-lg">Pages: {page}</p>
        <p className="text-lg">Page Sequence: {pageSeq}</p>
      </div> 
      */}
    </div>
  );
};

export default TableHeader;
