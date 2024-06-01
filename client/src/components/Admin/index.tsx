import { modalIsVisibleAtom, modalAddMode } from "@/atoms/modal";
import { useCarsQuery } from "@/hooks/queries/CarsQueries";
import { useAtom } from "jotai";

import Button from "../UI/Button";
import styles from "./Admin.module.css";
import CarsList from "./CarsList";

const Admin = () => {
  const { wrapper, grid } = styles;

  const { data } = useCarsQuery();

  const [isVisible, setIsVisible] = useAtom(modalIsVisibleAtom);
  const [, setMode] = useAtom(modalAddMode);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setMode(true);
  };

  return (
    <div className="container">
      <div className={wrapper}>
        <Button type="button" onClick={handleClick}>
          Cadastrar carro
        </Button>
        <h2>Carros cadastrados</h2>
        <div className={grid}>
          <CarsList data={data} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
