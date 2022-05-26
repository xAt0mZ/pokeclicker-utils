import { Region, WeatherType } from './types';

export const weatherDistribution: { [region in Region]?: WeatherType[] } = {
  [Region.kanto]: [
    WeatherType.Clear,
    WeatherType.Overcast,
    WeatherType.Rain,
    WeatherType.Thunderstorm,
    WeatherType.Sunny,
  ],
  [Region.johto]: [
    WeatherType.Clear,
    WeatherType.Overcast,
    WeatherType.Rain,
    WeatherType.Thunderstorm,
    WeatherType.Snow,
    WeatherType.Hail,
    WeatherType.Blizzard,
    WeatherType.Sunny,
  ],
  [Region.hoenn]: [
    WeatherType.Clear,
    WeatherType.Overcast,
    WeatherType.Rain,
    WeatherType.Thunderstorm,
    WeatherType.Snow,
    WeatherType.Hail,
    WeatherType.Blizzard,
    WeatherType.Sunny,
    WeatherType.Sandstorm,
  ],
  [Region.sinnoh]: [
    WeatherType.Clear,
    WeatherType.Overcast,
    WeatherType.Rain,
    WeatherType.Thunderstorm,
    WeatherType.Snow,
    WeatherType.Hail,
    WeatherType.Blizzard,
    WeatherType.Sunny,
    WeatherType.Sandstorm,
    WeatherType.Fog,
  ],
};
