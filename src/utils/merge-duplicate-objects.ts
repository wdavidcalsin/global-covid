import { IStateCovidWorld } from "@/types";

export const mergeDuplicateObjects = (array: IStateCovidWorld[]) => {
  return array.filter(
    (v, i, a) => a.findIndex((v2) => v2.name === v.name) === i
  );
};
