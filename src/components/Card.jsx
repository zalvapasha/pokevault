import React from "react";
import pokeBall from "../assets/pokemon-ball.svg";

const Card = () => {
  return (
    <article className="w-80 h-[154px] p-4 bg-[#efefef] rounded-2xl border-l-2 border-r-4 border-t-2 border-b-4 border-black justify-start items-start gap-3 inline-flex">
      <div className="w-[98px] h-[116px] bg-[#c8d372] rounded-lg border border-black justify-center items-center gap-2 flex">
        <img className="w-20 h-20" src="https://via.placeholder.com/80x80" />
      </div>
      <div className="grow shrink basis-0 h-[116px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[123px] flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <h3 className="text-[#080808] text-lg font-semibold leading-[25.20px]">
                    Pokemon name
                  </h3>
                  <p className="text-[#454545] text-sm font-normal leading-tight">
                    № XXX
                  </p>
                </div>
              </div>
              <img src={pokeBall} className="w-8 h-8 relative" />
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <p className="text-[#454545] italic text-[13px] font-normal leading-[18.20px]">
                50 moves
              </p>
              <div className="justify-start items-start gap-1 inline-flex">
                <div className="px-2 py-1 bg-[#adba44] rounded border border-black/20 justify-center items-center gap-2 flex">
                  <p className="text-white text-xs font-semibold leading-none">
                    BUG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
