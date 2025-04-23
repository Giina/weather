import Head from "next/head";
import { Typography, Card, Spinner } from "@material-tailwind/react";
import { LocationSelector } from "@/components/LocationSelector";
import { useState } from "react";
import FORECAST from "@/mockData/forecast5DaysShangHai";
import { WeatherCard } from "@/components/WeatherCard";
import { DailyWeather } from "@/types/DailyWeather";

export default function Home() {
  const [dailyWeatherList, setDailyWeatherList] = useState<DailyWeather[]>(
    FORECAST.DailyForecasts
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLocationChange = (
    val: string | undefined,
    id: string | undefined
  ) => {
    setIsLoading(true);
    if (id) {
      fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=jc7Pt05hTubGsx42JJTyrL37jFeMqHkG&details=false&metric=false`
      )
        .then((res) => res.json())
        .then((res) => {
          setDailyWeatherList(res.DailyForecasts)
          setIsLoading(false);
        });
    }
  };
  return (
    <>
      <Head>
        <title>Material Tailwind + Next.js + TS</title>
      </Head>
      <div className="relative grid min-h-[100vh] w-screen p-8">
        <div className="flex flex-col-reverse items-center justify-between gap-4 self-start md:flex-row">
          <div className="h-max w-max py-4 px-5">
            <LocationSelector
              initValue="Shanghai"
              onChange={handleLocationChange}
            />
          </div>
          <Card
            className="h-max w-max flex-row items-center border border-blue-gray-50 font-semibold text-blue-gray-900 shadow-lg shadow-blue-gray-900/5"
            placeholder=""
          >
            <div className="py-4 pl-4 pr-5">copyright © giina</div>
          </Card>
        </div>
        {(isLoading && (
          <div className="flex flex-row gap-2 pt-56 pb-40 text-center">
            <Spinner className="m-auto h-12 w-12" />
          </div>
        )) || (
          <div className="flex flex-col lg:flex-row gap-2 pt-56 pb-40 text-center">
            <div className="flex-1"></div>
            {new Array(5).fill(1).map((_, index) => (
              <WeatherCard key={index} weather={dailyWeatherList[index]} />
            ))}
            <div className="flex-1"></div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 self-end md:grid-cols-2 lg:grid-cols-4"></div>
      </div>
    </>
  );
}
