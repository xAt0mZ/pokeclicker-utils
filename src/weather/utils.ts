import { format } from 'date-fns';
import { compact, dropRight, entries, find, groupBy, sortBy } from 'lodash';

import { WeatherType } from './types';
import { allWeathersDistrib, RegionWeather, Weather } from './Weather';

export function generateWeatherImagePath(weather: WeatherType) {
  return `/assets/images/weather/${WeatherType[weather]}.png`
}

export function getWeatherForecast(weathers: Weather[]) {
  const nextWeathers = allWeathersDistrib.map((dist) => find<Weather>(weathers, (w) => w.weather.type === dist));

  return compact(nextWeathers);
}

const daysToKeep = 5;

export function getRegionForecast(weathers: Weather[]) {
  const regions = groupBy(weathers, 'regionName');
  const groups = entries(regions).map(([region, regionWeathers]): RegionWeather => {
    const groupedByDate = groupBy(regionWeathers, (w) => format(w.startDate, "dd/MM"));
    const orderedPairs = sortBy(entries(groupedByDate), ([, w]) => format(w[0].startDate, "yyyy/MM/dd"));
    const shrinked = dropRight(orderedPairs, orderedPairs.length - daysToKeep);
    return [region, shrinked];
  });
  return groups;
}