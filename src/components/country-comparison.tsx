import React from "react";
import { CubeIcon, CubeTransparentIcon } from "@heroicons/react/solid";
import { Card, Dropdown, DropdownItem, Text } from "@tremor/react";
import { uuid } from "uuidv4";

import { useCovidWorld } from "@/store";
import { removeDuplicateObjects } from "@/utils";

const CountryComparison = () => {
  const { covidWorldData } = useCovidWorld();

  return (
    <div className="flex justify-center px-10 py-10">
      <div className="w-full flex justify-center">
        <div className="w-96 flex gap-3 items-center">
          <Dropdown
            className="mt-2"
            onValueChange={(value) =>
              console.log("The selected value is", value)
            }
            placeholder="Country"
            color="#675"
          >
            {removeDuplicateObjects(covidWorldData).map((data) => (
              <DropdownItem key={uuid()} value={data.name} text={data.name} />
            ))}
          </Dropdown>
          <span className=" font-bold text-[#DAEDFF]">And</span>
          <Dropdown
            className="mt-2"
            onValueChange={(value) =>
              console.log("The selected value is", value)
            }
            placeholder="Country"
          >
            {removeDuplicateObjects(covidWorldData).map((data) => (
              <DropdownItem key={uuid()} value={data.name} text={data.name} />
            ))}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default CountryComparison;
