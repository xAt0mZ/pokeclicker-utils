import { WeatherType } from './types';

export function generateWeatherImagePath(weather: WeatherType) {
  return `/assets/images/weather/${WeatherType[weather]}.png`
}