import { Cars } from "@/types/cars";
import { FC } from "react";

import styles from "./Card.module.css";

interface Props {
  data: Cars;
  photo: string;
}

const Card: FC<Props> = ({ data, photo }) => {
  const {
    wrapper,
    cardHeader,
    title,
    subtitle,
    priceItem,
    symbol,
    priceWrapper,
    price,
  } = styles;

  return (
    <div className={wrapper}>
      <img src={photo} />
      <div className={cardHeader}>
        <h3 className={title}>{`${data.brand} • ${data.model}`}</h3>
        <span className={subtitle}>
          {`${data.year} • ${data.mileage} km • ${data.name} • ${data.transmission}`}
        </span>
      </div>
      <div className={priceItem}>
        <span>Preço à vista</span>
        <div className={priceWrapper}>
          <span className={symbol}>R$</span>
          <span className={price}>55.699</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
