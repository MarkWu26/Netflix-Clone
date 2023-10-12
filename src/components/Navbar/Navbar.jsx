import {IoSearch} from 'react-icons/io5'
import {FaRegBell} from 'react-icons/fa6'
import profilePic from '../../assets/img/profile.png'
import {RiArrowDownSFill} from 'react-icons/ri'


const Navbar = () => {
  return (
    <nav className='w-full text-white py-0 flex items-center h-[70px] z-[999] fixed top-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.5)] to-transparent'>
        <div className='w-full flex items-center justify-between px-[60px]'>
            {/* Netflix logo and left part  */}
            <div className='flex flex-row gap-x-3 '>
                {/* Netflix Logo */}
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                    className='h-[25px] mr-[40px]'
                    />
                </div>
                {/* Navigation Pages */}
                <div className="flex items-center flex-row gap-x-5 text-sm ">
                    <a className="flex items-center cursor-pointer text-white font-bold">
                        Home
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5]">
                        Tv Shows
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5]">
                        Movies
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5]">
                        New & Popular
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5]">
                        My List
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5]">
                        Browse by Languages
                    </a>

                </div>
            </div>

            {/* User tools Right Section*/}
            <div className='flex flex-row gap-x-7 items-center text-white text-[20px]'>
                <div className='flex items-center cursor-pointer text-[24px]'>
                    <IoSearch/>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <FaRegBell/>
                </div>
                <div className='h-full overflow-hidden rounded-[5px] flex items-center'>
                    <div className='flex flex-row items-center gap-x-2 cursor-pointer'>
                        <div>
                            <img alt='' className='h-[32px] w-[32px] object-cover' src={profilePic}/>
                        </div>
                        <div className='text-[18px] '>
                            <RiArrowDownSFill/>
                        </div>
                       
                    </div>  
                </div>
            </div>

        </div>




    </nav>
  )
}

export default Navbar