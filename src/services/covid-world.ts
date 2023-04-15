import { ICovidWorldService, IStateServices } from "@/types";

export const covidWorldService = async (): Promise<IStateServices[]> => {
  const countryResults = await fetch("api/covid-ninja");
  const dataCovid = (await countryResults.json()) as ICovidWorldService[];

  const dataCovidTremor = dataCovid.map((data) => ({
    name: data.country,
    "Number of infected": data.cases.total,
  }));

  return dataCovidTremor;
};
