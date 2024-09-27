import { fetchDetails } from "../utils/api";
import React, { useEffect, useState } from "react";
import Types from "./Types";
import Moves from "../components/Moves";

const MovesList = ({ moves }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto overflow-y-auto max-h-[560px]">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/6 px-3 py-2 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Damage Class
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Power
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Accuracy
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      PP
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border-b border-[##e5e7eb] bg-white">
                  {moves?.map((move, index) => (
                    <Moves key={index} moves={move} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovesList;
