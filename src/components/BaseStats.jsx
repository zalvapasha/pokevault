import React, { useEffect, useState } from "react";
import { convertToProgressBar } from "../utils/utils";

const BaseStats = ({ detailPage }) => {
  return (
    <>
      {/* <div className="flex flex-row gap-3">
        <p>HP: {detailPage.stats[0]?.base_stat || "N/A"}</p>
        <p>Attack: {detailPage.stats[1]?.base_stat || "N/A"}</p>
        <p>Defense: {detailPage.stats[2]?.base_stat || "N/A"}</p>
        <p>Sp. Atk: {detailPage.stats[3]?.base_stat || "N/A"}</p>
        <p>Sp. Def: {detailPage.stats[4]?.base_stat || "N/A"}</p>
        <p>Speed: {detailPage.stats[5]?.base_stat || "N/A"}</p>
      </div> */}

      <div>
        <div className="space-y-2">
          {/* HP */}
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-regular text-gray-800 ">HP</h3>
              <span className="text-sm text-gray-800 ">
                {detailPage.stats[0]?.base_stat || "N/A"}
              </span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-300 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={detailPage.stats[0]?.base_stat || "N/A"}
              aria-valuemin={0}
              aria-valuemax={255}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-[#88AAEE] text-xs text-white text-center whitespace-nowrap transition duration-500 "
                style={{
                  width: `${convertToProgressBar(
                    detailPage.stats[0]?.base_stat
                  )}%`,
                }}
              />
            </div>
          </div>
          {/* End Progress */}
          {/* Attack */}
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-regular text-gray-800 ">Attack</h3>
              <span className="text-sm text-gray-800 ">
                {detailPage.stats[1]?.base_stat || "N/A"}
              </span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-300 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={detailPage.stats[1]?.base_stat || "N/A"}
              aria-valuemin={0}
              aria-valuemax={255}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-[#88AAEE] text-xs text-white text-center whitespace-nowrap transition duration-500 "
                style={{
                  width: `${convertToProgressBar(
                    detailPage.stats[1]?.base_stat
                  )}%`,
                }}
              />
            </div>
          </div>
          {/* End Progress */}
          {/* Defense */}
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-regular text-gray-800 ">Defense</h3>
              <span className="text-sm text-gray-800 ">
                {detailPage.stats[2]?.base_stat || "N/A"}
              </span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-300 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={detailPage.stats[2]?.base_stat || "N/A"}
              aria-valuemin={0}
              aria-valuemax={255}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-[#88AAEE] text-xs text-white text-center whitespace-nowrap transition duration-500 "
                style={{
                  width: `${convertToProgressBar(
                    detailPage.stats[2]?.base_stat
                  )}%`,
                }}
              />
            </div>
          </div>
          {/* End Def */}
          {/* Sp. Atk */}
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-regular text-gray-800 ">Sp. Atk</h3>
              <span className="text-sm text-gray-800 ">
                {detailPage.stats[3]?.base_stat || "N/A"}
              </span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-300 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={detailPage.stats[3]?.base_stat || "N/A"}
              aria-valuemin={0}
              aria-valuemax={255}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-[#88AAEE] text-xs text-white text-center whitespace-nowrap transition duration-500 "
                style={{
                  width: `${convertToProgressBar(
                    detailPage.stats[3]?.base_stat
                  )}%`,
                }}
              />
            </div>
          </div>
          {/* End Sp. Atk */}
          {/* Sp. Def */}
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-regular text-gray-800 ">Sp. Def</h3>
              <span className="text-sm text-gray-800 ">
                {detailPage.stats[4]?.base_stat || "N/A"}
              </span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-300 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={detailPage.stats[4]?.base_stat || "N/A"}
              aria-valuemin={0}
              aria-valuemax={255}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-[#88AAEE] text-xs text-white text-center whitespace-nowrap transition duration-500 "
                style={{
                  width: `${convertToProgressBar(
                    detailPage.stats[4]?.base_stat
                  )}%`,
                }}
              />
            </div>
          </div>
          {/* End Sp. Def */}
          {/* Spd */}
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-regular text-gray-800 ">Speed</h3>
              <span className="text-sm text-gray-800 ">
                {detailPage.stats[5]?.base_stat || "N/A"}
              </span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-300 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={detailPage.stats[5]?.base_stat || "N/A"}
              aria-valuemin={0}
              aria-valuemax={255}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-[#88AAEE] text-xs text-white text-center whitespace-nowrap transition duration-500 "
                style={{
                  width: `${convertToProgressBar(
                    detailPage.stats[5]?.base_stat
                  )}%`,
                }}
              />
            </div>
          </div>
          {/* End Spd */}
        </div>
      </div>
    </>
  );
};
export default BaseStats;
