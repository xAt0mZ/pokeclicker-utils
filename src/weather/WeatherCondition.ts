import { PokemonType, WeatherType } from './types';

export class WeatherCondition {
  constructor(
    public type: WeatherType,
    public name: string,
    public color: string,
    public description: string,
    public weight: number,
    public multipliers: { type: PokemonType, multiplier: number }[] = [],
  ) { }

  get tooltip(): string {
    const tooltip = [];
    tooltip.push(this.description);
    this.multipliers.forEach((v) => {
      tooltip.push(`${PokemonType[v.type]}: ${v.multiplier.toFixed(2)}x`);
    });
    return tooltip.join('<br>');
  }
}

export const weatherConditions: { [weather in WeatherType]: WeatherCondition } = {
  [WeatherType.Clear]:
    new WeatherCondition(WeatherType.Clear, 'Clear', '#ffe57a', 'The weather is clear and pleasant.', 30),
  [WeatherType.Overcast]:
    new WeatherCondition(WeatherType.Overcast, 'Overcast', '#bed8ff', 'Clouds fill the skies.', 15,
      [{ type: PokemonType.Normal, multiplier: 1.1 }]),
  [WeatherType.Rain]:
    new WeatherCondition(WeatherType.Rain, 'Rain', '#9db7f5', 'It\'s rainy and humid.', 10,
      [{ type: PokemonType.Water, multiplier: 1.1 }, { type: PokemonType.Bug, multiplier: 1.05 }]),
  [WeatherType.Thunderstorm]:
    new WeatherCondition(WeatherType.Thunderstorm, 'Thunderstorm', '#a19288', 'It\'s currently raining heavily with thunder.', 5,
      [{ type: PokemonType.Electric, multiplier: 1.1 }, { type: PokemonType.Water, multiplier: 1.1 }, { type: PokemonType.Fire, multiplier: 0.9 }]),
  [WeatherType.Snow]:
    new WeatherCondition(WeatherType.Snow, 'Snow', '#bbe6e6', 'It\'s cold and snowing.', 5,
      [{ type: PokemonType.Ice, multiplier: 1.05 }]),
  [WeatherType.Hail]:
    new WeatherCondition(WeatherType.Hail, 'Hail', '#74e6e6', 'It\'s cold and hailing.', 3,
      [{ type: PokemonType.Ice, multiplier: 1.1 }]),
  [WeatherType.Blizzard]:
    new WeatherCondition(WeatherType.Blizzard, 'Blizzard', '#98d8d8', 'A howling blizzard blows.', 2,
      [{ type: PokemonType.Ice, multiplier: 1.2 }, { type: PokemonType.Fire, multiplier: 0.9 }, { type: PokemonType.Grass, multiplier: 0.9 }]),
  [WeatherType.Sunny]:
    new WeatherCondition(WeatherType.Sunny, 'Sunny', '#f5ac78', 'The sunlight is strong.', 10,
      [{ type: PokemonType.Fire, multiplier: 1.2 }, { type: PokemonType.Grass, multiplier: 1.1 }, { type: PokemonType.Water, multiplier: 0.9 }]),
  [WeatherType.Sandstorm]:
    new WeatherCondition(WeatherType.Sandstorm, 'Sandtorm', '#d1c07d', 'A sandstorm is raging.', 10,
      [{ type: PokemonType.Rock, multiplier: 1.1 }, { type: PokemonType.Ground, multiplier: 1.1 }, { type: PokemonType.Steel, multiplier: 1.1 }]),
  [WeatherType.Fog]:
    new WeatherCondition(WeatherType.Fog, 'Fog', '#d2c2ef', 'The fog is deep...', 10,
      [{ type: PokemonType.Ghost, multiplier: 1.2 }, { type: PokemonType.Dark, multiplier: 1.1 }, { type: PokemonType.Electric, multiplier: 0.9 }]),
  [WeatherType.Windy]:
    new WeatherCondition(WeatherType.Windy, 'Windy', '#81c4ca', 'Mysterious strong winds blow.', 1,
      [{ type: PokemonType.Flying, multiplier: 1.2 }, { type: PokemonType.Dragon, multiplier: 1.1 }]),
};
