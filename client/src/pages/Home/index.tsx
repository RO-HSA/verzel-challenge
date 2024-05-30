import CarsDisplay from "@/components/CarsDisplay";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <CarsDisplay />
      </main>
    </>
  );
};

export default Home;
