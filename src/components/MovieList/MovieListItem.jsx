import { useState } from "react";
import { PiPlusLight } from "react-icons/pi";
import { IoMdPlay } from "react-icons/io";
import { BsHandThumbsUp } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

const MovieListItem = ({ index, imgPath, title, movieGenres, genres }) => {
  const [isHovered, setIsHovered] = useState(null);

  const imgUrl = `https://image.tmdb.org/t/p/original${imgPath}`;

  const handleHoverEnter = (index) => {
    setIsHovered(index);
  };

  const handleHoverLeave = () => {
    setIsHovered(null);
  };

  const genreList = genres.filter((genre) => movieGenres.includes(genre.id));

  return (
    <>
      <div
        onMouseEnter={() => handleHoverEnter(index)}
        onMouseLeave={() => handleHoverLeave()}
        className={` whitespace-nowrap -mr-[46px] flex flex-row transition-transform hover:scale-110  ease-in-out transform ${
          isHovered === index ? "hovered" : ""
        }`}
      >
        <img
          alt=""
          src={imgUrl}
          className="w-[65%] rounded-[4px] hover:cursor-pointer whitespace-nowrap overflow-hidden"
        />

        {isHovered === index && (
          <div className="absolute shadow-xl  bg-[#141414] text-white   transition-transform hover:rounded-lg w-[315px] h-[300px] rounded-lg ease-in-out duration-300 transform cursor-pointer delay-100 -top-[110px] overflow-hidden -left-7  flex-col flex z-[999] hover:z-[999] "
          style={{zIndex: 9999}}
          >
            <div className="flex items-start justify-center">
              <img
                alt=""
                src={imgUrl}
                className="w-[100%] h-[100%]  hover:cursor-pointer whitespace-nowrap overflow-hidden z-[1001]  object-cover"
              />
            </div>
            {/* action buttons */}
            <div className="text-white flex flex-row  mx-5 py-4">
              <div className="flex items-start gap-x-3 w-full">
                <IoMdPlay className="bg-white rounded-full font-thin text-[36px]   p-1 flex justify-center pl-2 text-black hover:bg-opacity-90" />
                <PiPlusLight className="bg-white rounded-full bg-opacity-10 font-thin text-[36px]  border-[1px] border-[white] border-opacity-70  p-1 hover:bg-opacity-20" />
                <BsHandThumbsUp className="bg-white rounded-full bg-opacity-10 font-thin text-[36px]  border-[1px] border-[white] p-[8px] border-opacity-70 hover:bg-opacity-20 " />
              </div>
              <div className="flex items-end">
                <HiChevronDown className="bg-white rounded-full bg-opacity-10 font-thin text-[38px]  border-[1px] border-[white] p-[8px] border-opacity-70 hover:bg-opacity-20 text-white items-center flex " />
              </div>
            </div>
            {/* Genres */}
            <div className="flex flex-row gap-x-3 mx-5 text-sm font-extralight">
              {genreList.map((genre, index) => (
                <div key={index}>
                  <div className="flex flex-row items-center gap-x-2">
                    {index !== 3 && genre.name}

                    {genreList.length < 3 ? (
                      index !== genreList.length - 1 && ( //if there
                        <GoDotFill className="text-[#6D6D6EB3] text-xs" />
                      )
                    ) : index < 3 ? (
                      index === 2 ? (
                        <div className="hidden"></div>
                      ) : (
                        <GoDotFill className="text-[#6D6D6EB3] text-xs" />
                      )
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieListItem;
