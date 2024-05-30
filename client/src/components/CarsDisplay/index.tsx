import Card from "./Card";
import styles from "./CarsDisplay.module.css";

const CarsDisplay = () => {
  const { container } = styles;

  return (
    <div className={container}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CarsDisplay;
