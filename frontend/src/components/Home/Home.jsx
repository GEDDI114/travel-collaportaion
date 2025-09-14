import DisplayProduct from "./Display/DisplayProduct";
import Header from "./Header/Header";
import PopularCities from "./PopularCities/PopularCities";

const Home = () => {
  return (
    <>
      <Header />
      <PopularCities />
      <DisplayProduct />
    </>
  );
};
export default Home;
