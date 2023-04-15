import * as React from "react";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";

import { covidWorldService } from "@/services";
import { useCovidWorld } from "@/store";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number: number) => {
  return "People " + Intl.NumberFormat("us").format(number).toString();
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
            yAxisWidth={48}
          />
        </Card>
        {/* <div className="flex justify-center">
          <div
            onClick={handleClick}
            className="p-2 font-bold rounded-3xl bg-green-500 cursor-pointer"
          >
            View Data
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TremorTable;
