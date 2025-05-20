'use client'
import NavBar from "@/components/NavBar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type WeatherForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastEntry[];
  city: CityInfo;
};

type ForecastEntry = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherInfo[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

type WeatherInfo = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type CityInfo = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export default function Home() {
  const { isPending, data } = useQuery<WeatherForecastResponse>({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${"Colombo"}&appid=${
          process.env.NEXT_PUBLIC_WEATHER_API_KEY
        }&cnt=5`
      );
      return data;
    },
  });

  console.log("data", data?.city.country);

  if (isPending) return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="animate-bounce">Loading...</h1>
    </div>
  );

  return (
    <div className="flex flex-col bg-gray-100 gap-4 min-h-screen">
      <NavBar />
    </div>
  );
}
