import { Typography, Card } from "@material-tailwind/react";
import { DailyWeather } from "@/types/DailyWeather";
import { WEATHER_ICONS } from "./data";
import { formatDate } from "@/utils/formatDate";
interface Props {
  weather: DailyWeather;
}

export function WeatherCard(props: Props) {
  return (
    <Card
      placeholder=""
      shadow={false}
      className="flex-1 flex justify-between border border-blue-gray-50 p-2 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
    >
      <Typography
        className="pb-2 font-bold border-bottom"
        color="blue-gray"
        placeholder=""
      >
        {formatDate(props.weather.Date)}
      </Typography>
      <hr />
      <Typography
        variant="h5"
        className="m-auto flex items-center"
        color="blue-gray"
        placeholder=""
      >
        <img
          width={60}
          src={WEATHER_ICONS[props.weather.Day.Icon].src}
          alt={`${props.weather.Date}:Day:${props.weather.Day.IconPhrase}`}
        />
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12491"
          width="20"
          height="20"
        >
          <path
            d="M766.848 464.096a38.208 38.208 0 0 1 3.008 61.568l-3.008 2.24L265.408 893.44a16 16 0 0 1-25.408-12.928v-42.72a16 16 0 0 1 6.592-12.96L698.944 496 246.592 167.2A16 16 0 0 1 240 154.24V111.456a16 16 0 0 1 25.44-12.928l501.408 365.568z"
            fill="#595959"
            p-id="12492"
          ></path>
        </svg>
        <img
          width={60}
          src={WEATHER_ICONS[props.weather.Night.Icon].src}
          alt={`${props.weather.Date}:Night:${props.weather.Night.IconPhrase}`}
        />
      </Typography>
      <Typography
        color="blue-gray"
        className="font-normal opacity-70 mb-7"
        placeholder=""
      >
        {props.weather.Temperature.Minimum.Value}°
        {props.weather.Temperature.Minimum.Unit}
        <span className="inline-block mx-2">~</span>
        {props.weather.Temperature.Maximum.Value}°
        {props.weather.Temperature.Minimum.Unit}
      </Typography>
    </Card>
  );
}
