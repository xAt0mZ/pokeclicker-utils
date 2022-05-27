import { compact, upperFirst } from 'lodash';
import { addDays, addHours, eachHourOfInterval, getHours, setHours, setMilliseconds, setMinutes, setSeconds } from 'date-fns';

import SeededRand from '../utils/SeededRand';
import { Region, RegionsCount } from '../region/types';

import { WeatherType } from './types';
import { WeatherCondition, weatherConditions } from './WeatherCondition';
import { weatherDistribution } from './WeatherDistribution';

const regionalWeather = Array<WeatherType>(RegionsCount).fill(WeatherType.Clear);

// same weather for <period> hours
const period = 4;

export const allWeathersDistrib: WeatherType[] = Object.keys(WeatherType).map(Number).filter((k) => !Number.isNaN(k));

export interface Weather {
  startDate: Date,
  endDate: Date,
  region: Region,
  regionName: string,
  weather: WeatherCondition
}

export type DateWeather = [string, Weather[]];
export type RegionWeather = [string, DateWeather[]];

function resetHMS(date: Date) {
  const tmpDate = setMinutes(setSeconds(setMilliseconds(date, 0), 0), 0);
  return setHours(tmpDate, getHours(tmpDate) - (getHours(tmpDate) % period));
}

export function generateForcast() {
  const date = resetHMS(new Date);
  const interval = { start: date, end: addDays(date, 30) };
  const dates = eachHourOfInterval(interval, { step: 4 })

  const allWeathers = dates.flatMap((date) => generateWeathers(date))

  return compact(allWeathers);
}

export function generateWeathers(date: Date): Weather[] {
  SeededRand.seedWithDateHour(date, period);

  return regionalWeather.map((...[, region]: [WeatherType, Region]) => {
    // If no distribution set, assume all weather available
    const dist = weatherDistribution[region] || allWeathersDistrib;

    // Select weather based on weighted odds
    const selectedWeather = SeededRand.fromWeightedArray(dist, dist.map((w) => weatherConditions[w].weight));

    // Set selected weather or Clear if failed
    return {
      startDate: date,
      endDate: addHours(date, period),
      region,
      regionName: upperFirst(Region[region]),
      weather: weatherConditions[selectedWeather || WeatherType.Clear],
    }
  });
}
