import {
  useCarDeletionMutation,
  useCarsQuery,
} from "@/hooks/queries/CarsQueries";
import { CarResponse } from "@/types/cars";
import { FC } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "./CarsList.module.css";

interface Props {
  data: CarResponse[] | undefined;
}

const CarsList: FC<Props> = ({ data }) => {
  const { line, toolkit, edit, del } = styles;

  const onError = () => {};

  const { refetch } = useCarsQuery();

  const { mutate } = useCarDeletionMutation(onError);

  const handleDeleteClick = (carId: string | undefined) => {
    mutate(carId);
    refetch();
  };

  return (
    <>
      {data?.map(car => (
        <>
          <div className={line}>
            <div className={toolkit}>
              <FaEdit className={edit} size={20} />
              <MdDelete
                className={del}
                size={20}
                onClick={() => handleDeleteClick(car.id)}
              />
            </div>
            <img src={car.photo} alt="Foto do carro" width={120} />
            <span>{car.brand}</span>
            <span>{car.model}</span>
            <span>{car.name}</span>
            <span>{car.year}</span>
            <span>{car.transmission}</span>
            <span>{car.price}</span>
          </div>
        </>
      ))}
    </>
  );
};

export default CarsList;
