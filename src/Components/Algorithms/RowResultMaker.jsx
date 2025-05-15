import React from "react";

const RowResultMaker = ({ result, index_arr }) => {
  return (
    <>
      {result.map((item, index) => {
        const lastEle = item[item.length - 1];

        return (
          <tr key={index}>
            {item.map((i, ind) => {
              const isResultCol = ind === item.length - 1;
              const isHighlight = ind === index_arr[index] + 1;

              const baseClass =
                "border text-center px-4 py-2";

              if (!isHighlight) {
                const bgColor = isResultCol
                  ? lastEle === "HIT"
                    ? "bg-[#7C99AC]"
                    : "bg-[#FFCDDD]"
                  : "";

                const borderColor = isResultCol
                  ? "border-black"
                  : "border-white";

                const textColor = isResultCol ? "text-black" : "";

                return (
                  <td
                    key={ind}
                    className={`${baseClass} ${bgColor} ${borderColor} ${textColor}`}
                  >
                    {i}
                  </td>
                );
              } else {
                const bgColor =
                  lastEle === "HIT"
                    ? "bg-[rgb(105,228,0,0.86)]"
                    : "bg-[#fa2c2c]";

                return (
                  <td key={ind} className={`${baseClass} ${bgColor}`}>
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

export default RowResultMaker;
