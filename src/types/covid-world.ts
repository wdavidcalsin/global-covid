export interface ICovidWorldService {
  cases: Cases;
  country: string;
  region: string;
}

export interface Cases {
  new: number;
  total: number;
}
