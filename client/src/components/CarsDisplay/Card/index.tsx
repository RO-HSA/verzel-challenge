import placeholder from "@/assets/example-car.webp";

import styles from "./Card.module.css";

const Card = () => {
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
      <img src={placeholder} />
      <div className={cardHeader}>
        <h3 className={title}>Ford • Ka</h3>
        <span className={subtitle}>
          2020 • 39.093 km • TI-VCT SE PLUS • Manual
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
