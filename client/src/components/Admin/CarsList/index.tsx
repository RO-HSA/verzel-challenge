import {
  modalAddMode,
  modalContentAtom,
  modalIsVisibleAtom,
  ModalType,
} from "@/atoms/modal";
import {
  useCarDeletionMutation,
  useCarsQuery,
} from "@/hooks/queries/CarsQueries";
import { CarResponse } from "@/types/cars";
import { useAtom } from "jotai";
import { FC, Fragment, SetStateAction } from "react";
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

  const [isVisible, setIsVisible] = useAtom(modalIsVisibleAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [, setMode] = useAtom(modalAddMode);

  const { mutate } = useCarDeletionMutation(onError);

  const handleDeleteClick = (carId: string | undefined) => {
    mutate(carId);
    refetch();
  };

  const handleEditClick = (data: SetStateAction<ModalType>) => {
    setIsVisible(!isVisible);
    setModalContent(data);
    setMode(false);
  };

  return (
    <>
      {data?.map(car => (
        <Fragment key={car.id}>
          <div className={line}>
            <div className={toolkit}>
              <FaEdit
                className={edit}
                size={20}
                onClick={() => handleEditClick(car as unknown as ModalType)}
              />
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
        </Fragment>
      ))}
    </>
  );
};

export default CarsList;
