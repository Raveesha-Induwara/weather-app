import React from "react";
import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";

interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

export interface WeatherDetailsProps {
  visibility: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailsProps) {
  return (
    <>
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Visibility"
        value={props.visibility}
      />
      <SingleWeatherDetail
        icon={<FiDroplet />}
        information="humidity"
        value={props.humidity}
      />
      <SingleWeatherDetail
        icon={<MdAir />}
        information="Wind Speed"
        value={props.windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter />}
        information="Air Pressure"
        value={props.airPressure}
      />
      <SingleWeatherDetail
        icon={<LuSunrise />}
        information="Sunrise"
        value={props.sunrise}
      />
      <SingleWeatherDetail
        icon={<LuSunset />}
        information="Sunset"
        value={props.sunset}
      />
    </>
  );
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 text-xs font-semibold">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
