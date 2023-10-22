import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import TopPicksItem from "./TopPicksItem";
import { useEffect } from "react";
import { useGetPopularMoviesQuery } from "../../../app/api/movieApiSlice";
import { useSelector } from "react-redux";
import { fetchGenres } from "../../../app/genres/genreSlice";

const TopPicks = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

const sampleTest = [
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },

]

  useEffect(() => {
    if (error) {
      console.error('there is an error:', error);
    } else if (!isLoading) {
      console.log(data);
    }
  }, [data, isLoading, error]);

 const genres = useSelector(fetchGenres)
 console.log('the genres are:', genres);

  return (
    <>
      <div className="flex flex-col  relative mt-[-140px] ">
        {/* List Heading */}
        <div className="text-[21px] text-white px-[60px] font-semibold">
          <h2>Top Picks for You</h2>
        </div>
      </div>

      {/* Movie List */}
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={-64} // Adjust this value as needed to control the space between images
        className=" -mt-4 items-center my-custom-swiper overflow-y-visible flex z-30 "
      >
        {/* Navigation Arrows */}
        <div className="pl-[20px] overflow-hidden w-[100%] pr-0 flex items-center ">
          <div className="right-0 flex items-center justify-center swiper-button-next text-[#E5E5E5] bg-[#141414] bg-opacity-20 py-[68px] px-8 top-[45px] rounded-[5px]">
            <PiCaretRightBold className="flex items-center justify-center" />
          </div>
          <div className=" left-0 flex items-center justify-center swiper-button-prev text-[#E5E5E5] bg-[#141414] bg-opacity-20 py-[68px] px-7 top-[45px]  rounded-[5px]">
            <PiCaretLeftBold className="flex items-center justify-center" />
          </div>
        </div>

        {data ? (
          data.results.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" h-[400px] -z-[999] hover:-z-50 custom-slide whitespace-nowrap flex items-center "
            style={{
              width: "135px", // Adjust the width to accommodate your images
              minWidth: "135px", // Minimum width
              height: "180px",
            }}
          >
            <TopPicksItem 
            index={index} 
            imgPath={item.backdrop_path} 
            title={item.title} 
            movieGenres={item.genre_ids} 
            genres={genres}
            />
          </SwiperSlide>
        ))
        ) : (
          sampleTest.map((item, index)=> (
            <SwiperSlide
            className=" h-[400px] -z-[999] hover:-z-50 custom-slide whitespace-nowrap flex items-center "
            style={{
              width: "135px", // Adjust the width to accommodate your images
              minWidth: "135px", // Minimum width
              height: "180px",
            }}
            key={index}
          >
          
              <div className="skeleton-loader transition-all ease-in-out duration-300  ">

              </div>
            
           
            
          </SwiperSlide>
          ))
         
        )
        }
      </Swiper>
    </>
  );
};

export default TopPicks;
