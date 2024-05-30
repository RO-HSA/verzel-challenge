import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
