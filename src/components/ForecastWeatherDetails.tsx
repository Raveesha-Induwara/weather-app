import React from "react";
import Container from "./Container";
import WeatherIcon from "./WeatherIcon";
import { convertKelvinToCelsius } from "@/utils/common";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import WeatherDetails, { WeatherDetailsProps } from "./WeatherDetails";

interface Props extends WeatherDetailsProps {
  date: string;
  day: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  weatherIcon: string;
  description: string;
}

export default function ForecastWeatherDetails(props: Props) {
  return (
    <Container className="gap-4">
      {/* Left section */}
      <section className="flex gap-4 px-4 items-center">
        <div className="flex flex-col items-center">
          <WeatherIcon iconName={props.weatherIcon} />
          <p className="">{props.date}</p>
          <p className="text-sm">{props.day}</p>
        </div>

        <div className="flex flex-col px-4">
          <span className="text-5xl">
            {convertKelvinToCelsius(props.temp ?? 0)}°
          </span>
          <p className="mt-1 text-sm space-x-1 whitespace-nowrap">
            <span>Feels like</span>
            <span>{convertKelvinToCelsius(props.feels_like ?? 0)}°</span>
          </p>
          <div className="flex space-x-2">
            <span className="flex items-center text-sm">
              {convertKelvinToCelsius(props.temp_min ?? 0)}°{" "}
              <FaArrowDownLong size={14} />
            </span>
            <span className="flex items-center text-sm">
              {convertKelvinToCelsius(props.temp_max ?? 0)}°{" "}
              <FaArrowUpLong size={14} />
            </span>
          </div>
          <p className="mt-2 capitalize">{props.description}</p>
        </div>
      </section>

      {/* Right section */}
      <section className="flex gap-4 px-4 overflow-x-auto w-full justify-between pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}
