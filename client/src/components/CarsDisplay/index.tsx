import { useCarsQuery } from "@/hooks/queries/CarsQueries";

import Card from "./Card";

const CarsDisplay = () => {
  const { data } = useCarsQuery();

  return (
    <div className="container" style={{ gap: "16px", flexWrap: "wrap" }}>
      {data?.map(item => <Card key={item.id} data={item} photo={item.photo} />)}
    </div>
  );
};

export default CarsDisplay;
