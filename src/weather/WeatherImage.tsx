import { WeatherType } from './types';
import { generateWeatherImagePath } from './utils';

interface Props {
  weather: WeatherType
}

export function WeatherImage({ weather }: Props) {
  return (
    <img src={generateWeatherImagePath(weather)} alt=""/>
  )
}