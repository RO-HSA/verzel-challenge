import { useCarMutation } from "@/hooks/queries/CarsQueries";
import { FC, FormEvent, useState } from "react";

import styles from "./Modal.module.css";

const Modal: FC = () => {
  const { modal, overlay, modalContent, form, inputGroup, submitBtn } = styles;

  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [transmission, setTransmission] = useState("Automático");
  const [photo, setPhoto] = useState<FileList | null>(null);

  const onError = () => {};

  const { mutate } = useCarMutation(onError);

  const closeModal = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutate({
      name,
      brand,
      model,
      year: Number(year),
      mileage: Number(mileage),
      price: Number(price),
      transmission,
      photo,
    });
  };

  return (
    <div style={{ display: isVisible ? "flex" : "none" }} className={modal}>
      <div className={modalContent}>
        <form className={form} onSubmit={handleSubmit}>
          <div className={inputGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="brand">Marca</label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={e => setBrand(e.target.value)}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="model">Modelo</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={e => setModel(e.target.value)}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="year">Ano</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={e => setYear(e.target.value)}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="mileage">Quilometragem</label>
            <input
              type="number"
              id="mileage"
              value={mileage}
              onChange={e => setMileage(e.target.value)}
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
                value={transmission}
                onChange={e => setTransmission(e.target.value)}
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
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className={inputGroup}>
            <label htmlFor="photo">Foto</label>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={e => setPhoto(e.target.files)}
            />
          </div>
          <button type="submit" className={submitBtn}>
            Enviar
          </button>
        </form>
      </div>
      <div className={overlay} onClick={closeModal}></div>
    </div>
  );
};

export default Modal;
