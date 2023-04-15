import type { NextApiRequest, NextApiResponse } from "next";

const { API_URL_BASE, API_TOKEN } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!API_URL_BASE && !API_TOKEN)
    console.log("API_TOKEN and API_URL_BASE variable not found");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${API_TOKEN}`,
      "X-RapidAPI-Host": "covid-19-by-api-ninjas.p.rapidapi.com",
    },
  };

  const result = await fetch(`${API_URL_BASE}?date=2023-01-01`, options);
  const data = await result.json();

  res.status(200).json(data);
}
