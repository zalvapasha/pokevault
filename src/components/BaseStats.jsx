import React, { useEffect, useState } from "react";

const BaseStats = ({ detailPage }) => {
  return (
    <>
      <div className="flex flex-row gap-3">
        <p>HP: {detailPage.stats[0]?.base_stat || "N/A"}</p>
        <p>Attack: {detailPage.stats[1]?.base_stat || "N/A"}</p>
        <p>Defense: {detailPage.stats[2]?.base_stat || "N/A"}</p>
        <p>Sp. Atk: {detailPage.stats[3]?.base_stat || "N/A"}</p>
        <p>Sp. Def: {detailPage.stats[4]?.base_stat || "N/A"}</p>
        <p>Speed: {detailPage.stats[5]?.base_stat || "N/A"}</p>
      </div>
    </>
  );
};
export default BaseStats;
