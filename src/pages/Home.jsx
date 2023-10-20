import Navbar from "../components/Navbar/Navbar";
import Feature from "../components/feature/Feature";
import TopPicks from "../components/MovieList/TopPicks/TopPicks";
import TrendingNow from "../components/MovieList/TrendingNow/TrendingNow";
import Test from "../components/MovieList/test";

const Home = () => {
  return (
    <>
      <Navbar />
      <Feature />
      <TopPicks />
      <TrendingNow />
    </>
  );
};

export default Home;
