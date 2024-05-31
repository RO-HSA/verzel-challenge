import Modal from "@/components/Admin/Modal";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Modal />
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
