import React from "react";
import TableHeader from "./TableHeader";
import PieChart from "./PieChart";

const FIFO = (props) => {
  const frames = props.frame;
  const pageSeq = props.seq;

  let arr = [];
  for (let i = 0; i < frames; i++) {
    arr.push(i + 1);
  }

  const frameCreator = (f) => {
    return (
      <>
        {f.map((item, index) => (
          <th key={index} className="border text-white bg-[#273c3c] p-2">{`FRAME ${item}`}</th>
        ))}
      </>
    );
  };

  const fifoResultGiver = (frame, seq) => {
    let pageFaults = 0;
    let temp = Array(frame).fill(-1);
    let result = [];
    let index_arr = [];

    for (let i = 0; i < seq.length; i++) {
      let hit = false;
      let fault = false;
      let flag = 0;

      for (let j = 0; j < frame; j++) {
        if (seq[i] === temp[j]) {
          flag++;
          index_arr.push(j);
          pageFaults--;
          hit = true;
        }
      }

      pageFaults++;
      fault = true;
      if (pageFaults <= frame && flag === 0) {
        temp[i] = seq[i];
        index_arr.push(i);
      } else if (flag === 0) {
        let replaceIndex = (pageFaults - 1) % frame;
        temp[replaceIndex] = seq[i];
        index_arr.push(replaceIndex);
      }

      let elements = [];
      elements.push(`P${i + 1}   (${seq[i]})`);
      for (let j = 0; j < frame; j++) {
        elements.push(temp[j]);
      }
      elements.push(hit ? "HIT" : "FAULT");
      result.push(elements);
    }

    return { result, pageFaults, index_arr };
  };

  const rowResultMaker = (frames, pageSeq) => {
    const { result, index_arr } = fifoResultGiver(frames, pageSeq);

    return (
      <>
        {result.map((item, index) => {
          const lastEle = item[item.length - 1];

          return (
            <tr key={index}>
              {item.map((i, ind) => {
                const isResultCol = ind === item.length - 1;
                const isCurrentFrame = ind === index_arr[index] + 1;
                const bgColor =
                  isCurrentFrame && lastEle === "HIT"
                    ? "bg-lime-400"
                    : isCurrentFrame && lastEle === "FAULT"
                    ? "bg-red-500"
                    : isResultCol
                    ? lastEle === "HIT"
                      ? "bg-[#7C99AC] text-black border border-black"
                      : "bg-[#FFCDDD] text-black border border-black"
                    : "border border-white";

                return (
                  <td key={ind} className={`p-2 text-center ${bgColor}`}>
                    {i}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </>
    );
  };

  const { pageFaults } = fifoResultGiver(frames, pageSeq);
  const pageHits = pageSeq.length - pageFaults;

  return (
    <>
      <TableHeader algoName="FCFS (First Come First Serve)" />

      <div className="w-full flex flex-col items-center mt-10 mb-10 overflow-x-auto">
        <table className="text-white text-lg border-collapse">
          <thead>
            <tr>
              <th className="bg-[#273c3c] p-4 border">PAGES</th>
              {frameCreator(arr)}
              <th className="bg-[#273c3c] p-4 border">RESULT</th>
            </tr>
          </thead>
          <tbody>{rowResultMaker(frames, pageSeq)}</tbody>
        </table>

        <div className="mt-10 p-6 border rounded-3xl w-full max-w-2xl text-white text-left">
          <h2 className="text-center text-4xl mb-6">Summary</h2>
          <p className="text-xl">Total Frames: {props.frame}</p>
          <p className="text-xl">Total Pages: {props.seq.length}</p>
          <p className="text-xl">Page Sequence: {props.mainSeq}</p>
          <p className="text-xl">Page Hit: {pageHits}</p>
          <p className="text-xl">Page Faults: {pageFaults}</p>

          <div className="mt-6">
            <PieChart hit={pageHits} fault={pageFaults} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FIFO;
