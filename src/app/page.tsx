"use client";
import axios from "axios";
import NavBar from "@/components/NavBar";
import { format, parseISO } from "date-fns";
import Container from "@/components/Container";
import { useQuery } from "@tanstack/react-query";
import { WeatherForecastResponse } from "./types";
import WeatherIcon from "@/components/WeatherIcon";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

export default function Home() {
  const { isPending, isLoading, data } = useQuery<WeatherForecastResponse>({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${"Colombo"}&appid=${
          process.env.NEXT_PUBLIC_WEATHER_API_KEY
        }&cnt=50`
      );
      return data;
    },
  });

  function getLocaleDate(dateString: string) {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    const localDateString = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return localDateString;
  }

  function convertKelvinToCelsius(tempInKelvin: number) {
    return Math.round(tempInKelvin - 273.15);
  }

  if (isLoading || isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="animate-bounce">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-gray-100 gap-4 min-h-screen">
      <NavBar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* today data */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="flex gap-1 text-2xl items-end">
              <p>{getLocaleDate(data?.list[0].dt_txt ?? "")}</p>
            </h2>

            <Container className="gap-10 px-6 items-center">
              {/* temperature */}
              <div className="flex flex-col px-4">
                <span className="text-5xl">
                  {convertKelvinToCelsius(data?.list[0].main.temp ?? 0)}°
                </span>
                <p className="mt-1 text-sm space-x-1 whitespace-nowrap">
                  <span>Feels like</span>
                  <span>
                    {convertKelvinToCelsius(data?.list[0].main.feels_like ?? 0)}
                    °
                  </span>
                </p>
                <div className="flex space-x-2">
                  <span className="flex items-center text-sm">
                    {convertKelvinToCelsius(data?.list[0].main.temp_min ?? 0)}°{" "}
                    <FaArrowDownLong size={14} />
                  </span>
                  <span className="flex items-center text-sm">
                    {convertKelvinToCelsius(data?.list[0].main.temp_max ?? 0)}°{" "}
                    <FaArrowUpLong size={14} />
                  </span>
                </div>
              </div>

              {/* time & weather icon */}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                {data?.list.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between gap-2 text-sm font-semibold"
                  >
                    <p className="whitespace-nowrap">
                      {format(parseISO(data.dt_txt), "h:mm a")}
                    </p>
                    <WeatherIcon iconName={data.weather[0].icon} />
                    <p>{convertKelvinToCelsius(data.main.temp ?? 0)}° </p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </section>

        {/* 7 day forecast data */}
        <section></section>
      </main>
    </div>
  );
}
