import React from "react";
import PieChart from "./PieChart";
import TableHeader from "./TableHeader";

const MRU = (props) => {
  const frames = props.frame;
  const pageSeq = props.seq;

  let arr = [];
  for (let i = 0; i < frames; i++) arr.push(i + 1);

  const frameCreator = (f) => {
    return (
      <>
        {f.map((item, index) => (
          <th
            key={index}
            className="border border-white text-center p-2 bg-[#273c3c]"
          >
            {`FRAME ${item}`}
          </th>
        ))}
      </>
    );
  };

  const mruResultMaker = (frame, seq) => {
    let flag1, flag2, pos;
    let faults = 0;
    let result = [];
    let frame_arr = Array(frames).fill(-1);
    let index_arr = [];

    for (let i = 0; i < seq.length; i++) {
      flag1 = flag2 = 0;
      let hit = false;
      let fault = false;

      for (let j = 0; j < frame; j++) {
        if (seq[i] === frame_arr[j]) {
          flag1 = flag2 = 1;
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
            fault = true;
            flag2 = 1;
            index_arr.push(j);
            break;
          }
        }
      }

      if (flag2 === 0) {
        let prev = seq[i - 1];
        for (let j = 0; j < frame; j++) {
          if (frame_arr[j] === prev) {
            pos = j;
            break;
          }
        }
        faults++;
        fault = true;
        frame_arr[pos] = seq[i];
        index_arr.push(pos);
      }

      let elements = [`P${i + 1}   (${seq[i]})`, ...frame_arr];
      elements.push(hit ? "HIT" : fault ? "FAULT" : "");

      result.push(elements);
    }

    return { result, faults, index_arr };
  };

  const rowResultMaker = (frame, seq) => {
    const { result, index_arr } = mruResultMaker(frame, seq);

    return (
      <>
        {result.map((item, index) => {
          const lastEle = item[item.length - 1];
          return (
            <tr key={index} className={index % 2 === 0 ? '' : 'bg-[#273c3c]'}>
              {item.map((i, ind) => {
                const baseClass = "border text-center px-4 py-2";
                if (ind !== index_arr[index] + 1) {
                  return (
                    <td
                      key={ind}
                      className={`${baseClass} ${
                        ind !== item.length - 1
                          ? "border-white"
                          : lastEle === "HIT"
                          ? "bg-[#7C99AC] text-black border-black"
                          : "bg-[#FFCDDD] text-black border-black"
                      }`}
                    >
                      {i}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={ind}
                      className={`${baseClass} ${
                        lastEle === "HIT" ? "bg-lime-400/80" : "bg-[#fa2c2c]"
                      }`}
                    >
                      {i}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </>
    );
  };

  const { faults } = mruResultMaker(frames, pageSeq);
  const pageHits = pageSeq.length - faults;

  return (
    <>
      <TableHeader algoName={"MRU (Most Recently Used)"} />

      <div className="w-full flex flex-col items-center justify-center text-[20px] mt-10 mb-10 font-sans">
        <table className="overflow-x-auto">
          <thead>
            <tr>
              <th className="border text-center p-5 bg-[#273c3c]">PAGES</th>
              {frameCreator(arr)}
              <th className="border text-center p-5 bg-[#273c3c]">RESULT</th>
            </tr>
          </thead>
          <tbody>{rowResultMaker(frames, pageSeq)}</tbody>
        </table>

        <div className="text-center mt-10 border border-white rounded-[25px] w-full max-w-4xl">
          <h2 className="text-[46px] mt-4">Summary</h2>
          <div className="p-10 text-left text-[30px]">
            <p>Total Frames: {props.frame}</p>
            <p>Total Pages: {props.seq.length}</p>
            <p>Page Sequence: {props.mainSeq}</p>
            <p>Page Hit: {pageHits}</p>
            <p>Page Faults: {faults}</p>
          </div>

          <div className="flex justify-center">
            <PieChart hit={pageHits} fault={faults} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MRU;