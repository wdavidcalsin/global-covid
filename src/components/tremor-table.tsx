import * as React from "react";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";

import { useCovidWorld } from "@/store";

const dataFormatter = (number: number) => {
  return number.toString();
};

const TremorTable = () => {
  const { covidWorldData, setCovidWorldData } = useCovidWorld();

  React.useEffect(() => {
    setCovidWorldData();
  }, []);

  return (
    <div className="flex justify-center px-10 py-10">
      <div className="w-full">
        <Card className="bg-black">
          <Title>Number of people infected until (2023)</Title>
          <Subtitle>99% of the world population were evaluated</Subtitle>
          <BarChart
            className="mt-6"
            data={covidWorldData}
            index="name"
            categories={["Number of infected"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            yAxisWidth={65}
          />
        </Card>
      </div>
    </div>
  );
};

export default TremorTable;
