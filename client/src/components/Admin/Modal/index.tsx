import {
  initialModalContent,
  modalContentAtom,
  modalIsVisibleAtom,
  modalAddMode,
} from "@/atoms/modal";
import Button from "@/components/UI/Button";
import {
  useCarMutation,
  useCarUpdateMutation,
} from "@/hooks/queries/CarsQueries";
import { uploadPhoto } from "@/utils/uploadPhoto";
import { useAtom } from "jotai";
import { FC, FormEvent } from "react";
import { IoCloseOutline } from "react-icons/io5";

import styles from "./Modal.module.css";

const Modal: FC = () => {
  const { modal, overlay, modalContent, form, inputGroup } = styles;

  const [content, setContent] = useAtom(modalContentAtom);
  const [isVisible, setIsVisible] = useAtom(modalIsVisibleAtom);
  const [addMode] = useAtom(modalAddMode);

  const onError = () => {};

  const { mutate: createMutate } = useCarMutation(onError);
  const { mutate: updateMutate } = useCarUpdateMutation(onError);

  const closeModal = () => {
    setIsVisible(!isVisible);
    setContent(initialModalContent);
  };

  const handleAddSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const photo = await uploadPhoto(content.photo);

    if (photo) {
      createMutate({
        name: content.name,
        brand: content.brand,
        model: content.model,
        year: Number(content.year),
        mileage: Number(content.mileage),
        price: Number(content.price),
        transmission: content.transmission,
        photo,
      });
    }
  };

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const photo = await uploadPhoto(content.photo);

    if (photo) {
      updateMutate({
        id: content.id,
        name: content.name,
        brand: content.brand,
        model: content.model,
        year: Number(content.year),
        mileage: Number(content.mileage),
        price: Number(content.price),
        transmission: content.transmission,
        photo,
      });
    }
  };

  return (
    <div style={{ display: isVisible ? "flex" : "none" }} className={modal}>
      <div className={modalContent}>
        <IoCloseOutline
          style={{
            position: "absolute",
            top: "4px",
            right: "4px",
            cursor: "pointer",
          }}
          size={16}
          onClick={closeModal}
        />
        <form
          className={form}
          onSubmit={addMode ? handleAddSubmit : handleEditSubmit}
        >
          <div className={inputGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={content.name}
              onChange={e => setContent({ ...content, name: e.target.value })}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="brand">Marca</label>
            <input
              type="text"
              id="brand"
              value={content.brand}
              onChange={e => setContent({ ...content, brand: e.target.value })}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="model">Modelo</label>
            <input
              type="text"
              id="model"
              value={content.model}
              onChange={e => setContent({ ...content, model: e.target.value })}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="year">Ano</label>
            <input
              type="number"
              id="year"
              value={content.year}
              onChange={e => setContent({ ...content, year: e.target.value })}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="mileage">Quilometragem</label>
            <input
              type="number"
              id="mileage"
              value={content.mileage}
              onChange={e =>
                setContent({ ...content, mileage: e.target.value })
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className={inputGroup}>
              <label htmlFor="tranmission">Transmissão</label>
              <select
                name="transmission"
                id="transmission"
                value={content.transmission}
                onChange={e =>
                  setContent({ ...content, transmission: e.target.value })
                }
              >
                <option value="Automático">Automático</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div className={inputGroup}>
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                id="price"
                value={content.price}
                onChange={e =>
                  setContent({ ...content, price: e.target.value })
                }
              />
            </div>
          </div>
          {addMode && (
            <div className={inputGroup}>
              <label htmlFor="photo">Foto</label>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={e =>
                  setContent({ ...content, photo: e.target.files })
                }
              />
            </div>
          )}
          {addMode ? (
            <Button type="submit" alignSelf="center">
              Adicionar
            </Button>
          ) : (
            <Button type="submit" alignSelf="center">
              Editar
            </Button>
          )}
        </form>
      </div>
      <div className={overlay} onClick={closeModal}></div>
    </div>
  );
};

export default Modal;
