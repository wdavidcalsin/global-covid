import { IStateCovidWorld } from "@/types";

export const removeDuplicateObjects = (array: IStateCovidWorld[]) =>
  array.filter((v, i, a) => a.findIndex((v2) => v2.name === v.name) === i);
