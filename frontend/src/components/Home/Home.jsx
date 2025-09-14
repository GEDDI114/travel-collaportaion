// import DisplayProduct from "./Display/DisplayProduct";
import Header from "./Header/Header";
import PopularCities from "./PopularCities/PopularCities";
import TourCards from "./TourCards/TourCards";

const Home = () => {
  return (
    <>
      <Header />
      <PopularCities />
      {/* <DisplayProduct /> */}
      <TourCards />
    </>
  );
};
export default Home;
