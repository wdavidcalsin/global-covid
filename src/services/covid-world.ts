import { ICovidWorldService, IStateCovidWorld } from "@/types";

export const covidWorldService = async (): Promise<IStateCovidWorld[]> => {
  const countryResults = await fetch("api/covid-ninja");
  const dataCovid = (await countryResults.json()) as ICovidWorldService[];

  const dataCovidTremor = dataCovid.map((data) => ({
    name: data.country,
    "Number of infected": data.cases.total,
  }));

  return dataCovidTremor;
};
