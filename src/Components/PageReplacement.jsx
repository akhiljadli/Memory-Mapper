import React, { useState } from "react";
import FIFO from "./Algorithms/FIFO"
import LRU from "./Algorithms/LRU"
import MRU from "./Algorithms/MRU"
import OPR from "./Algorithms/OPR"

const PageReplcement = () => {
  const [frame, setFrame] = useState(0);
  const [error, setError] = useState(null);
  const [seq, setSeq] = useState("");
  const [result, setResult] = useState("none");
  const [seqArr, setSeqArr] = useState([]);

  const frameHanadler = (e) => {
    setFrame(Number(e.target.value));
  };

  const seqHandler = (e) => {
    setSeq(e.target.value);

    let Text = e.target.value;
    Text = Text.replace(/ {1,}/g, " ");
    Text = Text.trim();

    let arr = Text.split(" ");

    setSeqArr(arr);
    // setError(null);
    console.log("main seq arr ", seqArr);
  };

  

  const validateInputs = () => {
    if (frame < 0) return "Frames cannot be negative";
    if (frame === 0 || seq.length === 0) return "Please fill all the fields";
    if (seqArr.some((num) => parseInt(num) < 0 || isNaN(parseInt(num))))
      return "Negative or invalid numbers are not allowed in Page Sequence";
    return null;
  };

  const handleClick = (algo) => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      setResult("none");
    } else {
      setError(null);
      setResult(algo);
    }
  };

  const handleReset = () => {
    setFrame(0);
    setSeq("");
    setSeqArr([]);
    setResult("none");
    setError(null);
  };

  const buttons = [
    { key: "fifo", title: "FIFO" },
    { key: "opr", title: "OPR" },
    { key: "lru", title: "LRU" },
    { key: "mru", title: "MRU" },
  ];

  return (
    <div className="mt-20 min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-light text-red-500 text-center mb-6">Page Replacement Algorithm Simulator</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-lg mb-2">Enter Number of Frames</label>
            <input
              type="number"
              className="w-full px-4 py-2 text-black rounded-lg"
              value={frame}
              onChange={frameHanadler}
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Enter The Page Sequence</label>
            <input
              type="text"
              className="w-full px-4 py-2 text-black rounded-lg"
              value={seq}
              onChange={seqHandler}
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => handleClick(btn.key)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg"
              >
                {btn.title}
              </button>
            ))}
            <button
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg"
            >
              RESET
            </button>
          </div>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </div>

      <div className="mt-8 w-full max-w-4xl">
        {result === "fifo" && <FIFO frame={frame} seq={seqArr} mainSeq={seq} />}
        {result === "opr" && <OPR frame={frame} seq={seqArr} mainSeq={seq} />}
        {result === "lru" && <LRU frame={frame} seq={seqArr} mainSeq={seq} />}
        {result === "mru" && <MRU frame={frame} seq={seqArr} mainSeq={seq} />}
      </div>
    </div>
  );
};

export default PageReplcement;
