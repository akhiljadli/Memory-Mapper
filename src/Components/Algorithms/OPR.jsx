import React from "react";
import PieChart from "./PieChart";
import TableHeader from "./TableHeader";

const OPR = (props) => {
  const frames = props.frame;
  const pageSeq = props.seq;

  let arr = [];
  for (let i = 0; i < frames; i++) {
    arr.push(i + 1);
  }

  const frameCreator = (f) => {
    return (
      <>
        {f.map((item) => (
          <th className="border border-gray-400 text-center p-2 bg-[#273c3c]">{`FRAME ${item}`}</th>
        ))}
      </>
    );
  };

  const oprResultMaker = (frame, seq) => {
    let temp = [];
    let flag1, flag2, flag3, pos, max;
    let faults = 0;
    let result = [];
    let frame_arr = Array(frames).fill(-1);
    let index_arr = [];

    for (let i = 0; i < seq.length; i++) {
      flag1 = 0;
      flag2 = 0;
      let hit = false;
      let fault = false;

      for (let j = 0; j < frame; j++) {
        if (seq[i] === frame_arr[j]) {
          flag1 = 1;
          flag2 = 1;
          hit = true;
          index_arr.push(j);
          break;
        }
      }

      if (flag1 === 0) {
        for (let j = 0; j < frame; j++) {
          if (frame_arr[j] === -1) {
            faults++;
            frame_arr[j] = seq[i];
            index_arr.push(j);
            flag2 = 1;
            fault = true;
            break;
          }
        }
      }

      if (flag2 === 0) {
        flag3 = 0;
        for (let j = 0; j < frame; j++) {
          temp[j] = -1;
          for (let k = i + 1; k < seq.length; k++) {
            if (frame_arr[j] === seq[k]) {
              temp[j] = k;
              break;
            }
          }
        }

        for (let j = 0; j < frame; j++) {
          if (temp[j] === -1) {
            pos = j;
            flag3 = 1;
            break;
          }
        }

        if (flag3 === 0) {
          max = temp[0];
          pos = 0;
          for (let j = 1; j < frame; j++) {
            if (temp[j] > max) {
              max = temp[j];
              pos = j;
            }
          }
        }

        frame_arr[pos] = seq[i];
        index_arr.push(pos);
        faults++;
        fault = true;
      }

      let elements = [`P${i + 1}   (${seq[i]})`, ...frame_arr];
      elements.push(hit ? "HIT" : fault ? "FAULT" : "");
      result.push(elements);
    }

    return { result, faults, index_arr };
  };

  const rowResultMaker = (frame, seq) => {
    const { result, index_arr } = oprResultMaker(frame, seq);

    return (
      <>
        {result.map((item, index) => {
          const lastEle = item[item.length - 1];

          return (
            <tr key={index}>
              {item.map((i, ind) => {
                const isResultCol = ind === item.length - 1;
                const isFrameUpdate = ind === index_arr[index] + 1;

                let className = "border border-white text-center p-2";
                if (isResultCol) {
                  className += lastEle === "HIT" ? " bg-[#7C99AC] text-black border-black" : " bg-[#FFCDDD] text-black border-black";
                }

                if (isFrameUpdate && !isResultCol) {
                  className = `border border-white text-center p-2 ${
                    lastEle === "HIT" ? "bg-lime-400" : "bg-[#fa2c2c]"
                  }`;
                }

                return (
                  <td key={ind} className={className}>
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

  const { faults } = oprResultMaker(frames, pageSeq);
  const pageHits = pageSeq.length - faults;

  return (
    <>
      <TableHeader algoName={"OPR (Optimal Page Replacement)"} />

      <div className="w-full flex flex-col items-center justify-center text-[20px] mt-10 mb-10 font-sans">
        <div className="overflow-x-auto">
          <table className="border-collapse w-full text-white">
            <thead>
              <tr>
                <th className="border border-gray-400 bg-[#273c3c] p-5 text-center">PAGES</th>
                {frameCreator(arr)}
                <th className="border border-gray-400 bg-[#273c3c] p-5 text-center">RESULT</th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-[#273c3c]">
              {rowResultMaker(frames, pageSeq)}
            </tbody>
          </table>
        </div>

        <div className="text-white text-center mt-10 border border-white rounded-[25px] w-full max-w-3xl">
          <h2 className="text-[46px] my-4">Summary</h2>
          <div className="p-10 text-left space-y-4 text-[30px]">
            <p>Total Frames: {props.frame}</p>
            <p>Total Pages: {props.seq.length}</p>
            <p>Page Sequence: {props.mainSeq}</p>
            <p>Page Hit: {pageHits}</p>
            <p>Page Faults: {faults}</p>
          </div>
          <div className="pb-6">
            <PieChart hit={pageHits} fault={faults} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OPR;
