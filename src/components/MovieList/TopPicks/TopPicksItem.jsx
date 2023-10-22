import { useState } from "react";
import {PiPlusLight} from 'react-icons/pi'
import { IoMdPlay } from "react-icons/io";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const TopPicksItem = ({index, imgPath, title, movieGenres, genres}) => {
  const [isHovered, setIsHovered] = useState(null);

  const imgUrl = `https://image.tmdb.org/t/p/original${imgPath}`

  const handleHoverEnter = (index) => {
    setIsHovered(index);
  }

  const handleHoverLeave = () => {
    setIsHovered(null)
  }

  const genreList = genres.filter((genre)=> movieGenres.includes(genre.id))


  return (
    <>
      <div
        onMouseEnter={() => handleHoverEnter(index)}
        onMouseLeave={() => handleHoverLeave()}
        className={` whitespace-nowrap -mr-[46px] flex flex-row -z-40 transition-transform hover:scale-110  ease-in-out transform  ${
          isHovered === index ? "hovered" : ""
        }`}
      >
        <img
          alt=""
          src={imgUrl}
          className="w-[65%] rounded-[4px] hover:cursor-pointer whitespace-nowrap overflow-hidden"
        />

        {isHovered === index && (
          <div className="absolute shadow-xl  bg-[#141414] text-white   transition-transform z-[999] hover:rounded-lg w-[310px] h-[300px] rounded-lg ease-in-out duration-300 transform cursor-pointer delay-100 -top-[75px] overflow-hidden gap-y-2 flex-col flex">
            <div className="flex items-start justify-center">
              <img
                alt=""
                src={imgUrl}
                className="w-[100%] h-[100%]  hover:cursor-pointer whitespace-nowrap overflow-hidden z-[1001]  object-cover"
              />
            </div>
            {/* action buttons */}
            <div className="text-white flex flex-row gap-x-3 mx-3">
              <IoMdPlay className="bg-white rounded-full font-thin text-[42px]   p-2 flex justify-center pl-3 text-black"/>
              <PiPlusLight className="bg-white rounded-full bg-opacity-10 font-thin text-[42px]  border-[1px] border-[white] p-2"/>
              <BsFillHandThumbsUpFill className="bg-white rounded-full bg-opacity-10 font-thin text-[44px]  border-[1px] border-[white] p-3"/>
              
            </div>

          {/*   <div className="text-xl flex flex-col items-center">
              <h3 className="text-lg font-semibold w-[50%] flex justify-center">
                {title}
              </h3>
              <div className="flex flex-row text-sm gap-x-2 justify-start">
                {genreList.map((item, key) => (
                  <div key={key}>
                    <p className="text-xs">{item.name}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default TopPicksItem;
