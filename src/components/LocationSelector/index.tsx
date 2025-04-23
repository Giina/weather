import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { TOP_50_CITIES } from "./data";

interface Props {
  initValue: string;
  onChange: (val: string | undefined, id: string | undefined) => void;
}

const shanghaiIndex =
  TOP_50_CITIES.findIndex((city) => city.EnglishName === "Shanghai") + "";

export function LocationSelector(props: Props) {
  const defaultCityIndex =
    TOP_50_CITIES.findIndex((city) => city.EnglishName === props.initValue) +
    "";
  const [curCityIndex, setCurCityIndex] = useState<string>(
    defaultCityIndex === "-1" ? shanghaiIndex : defaultCityIndex
  );

  return (
    <div className="w-72">
      <Select
        label="city"
        placeholder="请选择城市"
        value={curCityIndex}
        onChange={(val) =>
          props.onChange(
            val ? TOP_50_CITIES[+val].EnglishName : undefined,
            val ? TOP_50_CITIES[+val].Key : undefined
          )
        }
      >
        {TOP_50_CITIES.map((city, index) => (
          <Option key={city.Key} value={index + ""}>
            {city.EnglishName}
          </Option>
        ))}
      </Select>
    </div>
  );
}
