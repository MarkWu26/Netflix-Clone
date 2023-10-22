import { useState } from "react";
import gray from '../../../assets/img/gray.png'

const TopPicksItem = () => {


  


  return (
    <>
      <div
      className={` whitespace-nowrap -mr-[46px] flex flex-row -z-40 transition-transform hover:scale-110  ease-in-out  transform`}
      >
         
        <img
          alt=""
          src={gray}
          className="w-[65%] rounded-[4px] hover:cursor-pointer whitespace-nowrap overflow-hidden"
        />

      </div>
    
    </>
  );
};

export default TopPicksItem;
