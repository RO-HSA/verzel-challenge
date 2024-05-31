import { useCarsQuery } from "@/hooks/queries/CarsQueries";

import styles from "./Admin.module.css";
import CarsList from "./CarsList";

const Admin = () => {
  const { wrapper, grid } = styles;

  const { data } = useCarsQuery();

  return (
    <div className="container">
      <div className={wrapper}>
        <button type="button">Cadastrar carro</button>
        <h2>Carros cadastrados</h2>
        <div className={grid}>
          <CarsList data={data} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
