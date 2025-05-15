import React from "react";
import PieChart from "./PieChart";
import TableHeader from "./TableHeader";
import RowResultMaker from "./RowResultMaker";

const LRU = (props) => {
  const frames = props.frame;
  const pageSeq = props.seq;

  let arr = [];
  for (let i = 0; i < frames; i++) arr.push(i + 1);

  const frameCreator = (f) => {
    return (
      <>
        {f.map((item, index) => (
          <th
            className="border border-gray-300 text-center px-4 py-2 bg-[#273c3c] text-white"
            key={index}
          >
            {`FRAME ${item}`}
          </th>
        ))}
      </>
    );
  };

  const findLru = (temp, frame) => {
    let minimum = temp[0];
    let pos = 0;

    for (let i = 0; i < frame; i++) {
      if (temp[i] < minimum) {
        minimum = temp[i];
        pos = i;
      }
    }
    return pos;
  };

  const lruResultMaker = (frame, seq) => {
    let temp = [];
    let counter = 0;
    let faults = 0;
    let result = [];
    let frame_arr = Array(frame).fill(-1);
    let index_arr = [];

    for (let i = 0; i < seq.length; i++) {
      let flag1 = 0;
      let flag2 = 0;
      let hit = false;
      let fault = false;

      for (let j = 0; j < frame; j++) {
        if (seq[i] === frame_arr[j]) {
          counter++;
          temp[j] = counter;
          index_arr.push(j);
          flag1 = 1;
          flag2 = 1;
          hit = true;
          break;
        }
      }

      if (flag1 === 0) {
        for (let j = 0; j < frame; j++) {
          if (frame_arr[j] === -1) {
            faults++;
            frame_arr[j] = seq[i];
            index_arr.push(j);
            counter++;
            temp[j] = counter;
            flag2 = 1;
            fault = true;
            break;
          }
        }
      }

      if (flag2 === 0) {
        let pos = findLru(temp, frame);
        faults++;
        counter++;
        temp[pos] = counter;
        frame_arr[pos] = seq[i];
        index_arr.push(pos);
        fault = true;
      }

      let elements = [];
      elements.push(`P${i + 1}   (${seq[i]})`);
      for (let j = 0; j < frame; j++) elements.push(frame_arr[j]);

      elements.push(hit ? "HIT" : "FAULT");
      result.push(elements);
    }

    return { result, faults, index_arr };
  };

  const { result, faults, index_arr } = lruResultMaker(frames, pageSeq);
  const pageHits = pageSeq.length - faults;

  return (
    <>
      <TableHeader algoName={"LRU (Least Recently Used)"} />

      <div className="w-full font-sans text-[20px] flex flex-col items-center justify-center mt-10 mb-10">
        <table className="overflow-x-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 text-center px-4 py-2 bg-[#273c3c] text-white">
                PAGES
              </th>
              {frameCreator(arr)}
              <th className="border border-gray-300 text-center px-4 py-2 bg-[#273c3c] text-white">
                RESULT
              </th>
            </tr>
          </thead>

          <tbody className="[&>tr:nth-child(even)]:bg-[#273c3c]">
            <RowResultMaker result={result} index_arr={index_arr} />
          </tbody>
        </table>

        <div className="text-center mt-8 border border-white rounded-3xl p-10 w-full max-w-3xl">
          <h2 className="text-[46px] text-center mb-4">Summary</h2>
          <div className="text-left space-y-4 text-[30px]">
            <p>Total Frames: {props.frame}</p>
            <p>Total Pages: {props.seq.length}</p>
            <p>Page Sequence: {props.mainSeq}</p>
            <p>Page Hit: {pageHits}</p>
            <p>Page Faults: {faults}</p>
          </div>
          <div className="mt-6">
            <PieChart hit={pageHits} fault={faults} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LRU;