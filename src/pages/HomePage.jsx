import React from "react";
import Types from "../components/Types";

const HomePage = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">HomePage</div>
      <div className="flex flex-col gap-1 w-max">
        {" "}
        <Types type="normal" />
        <Types type="fire" />
        <Types type="water" />
        <Types type="electric" />
        <Types type="grass" />
        <Types type="ice" />
        <Types type="fighting" />
        <Types type="poison" />
        <Types type="flying" />
        <Types type="psychic" />
        <Types type="ground" />
        <Types type="bug" />
        <Types type="rock" />
        <Types type="ghost" />
        <Types type="dragon" />
        <Types type="dark" />
        <Types type="steel" />
        <Types type="fairy" />{" "}
      </div>
    </>
  );
};

export default HomePage;
