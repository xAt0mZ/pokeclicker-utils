import { find, upperFirst } from 'lodash';
import { addDays, addHours, eachHourOfInterval, getHours, setHours, setMilliseconds, setMinutes, setSeconds } from 'date-fns';

import SeededRand from '../utils/SeededRand';

import { Region, WeatherType } from './types';
import { WeatherCondition, weatherConditions } from './WeatherCondition';
import { weatherDistribution } from './WeatherDistribution';

const regionalWeather = Array<WeatherType>(Object.keys(Region).length / 2 - 2).fill(WeatherType.Clear);

const period = 4;

const allWeathersDistrib: WeatherType[] = Object.keys(WeatherType).map(Number).filter((k) => !Number.isNaN(k));

export interface Weather {
  startDate: Date,
  endDate: Date,
  region: Region,
  regionName: string,
  weather: WeatherCondition
}

function resetHMS(date: Date) {
  const tmpDate = setMinutes(setSeconds(setMilliseconds(date, 0), 0), 0);
  return setHours(tmpDate, getHours(tmpDate) - (getHours(tmpDate) % period));
}

export function generateForcast(): Weather[] {
  const date = resetHMS(new Date);
  const interval = { start: date, end: addDays(date, 30) };
  const dates = eachHourOfInterval(interval, { step: 4 })

  const allWeathers = dates.flatMap((date) => generateWeathers(date))

  const nextWeathers = allWeathersDistrib.map((dist) => find<Weather>(allWeathers, (w) => w.weather.type === dist));
  const res: Weather[] = [];
  nextWeathers.forEach((w) => {
    if (w !== undefined) {
      res.push(w);
    }
  })
  return res;
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
