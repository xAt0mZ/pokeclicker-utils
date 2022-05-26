export enum PokemonType {
  'None' = -1,
  'Normal' = 0,
  'Fire' = 1,
  'Water' = 2,
  'Electric' = 3,
  'Grass' = 4,
  'Ice' = 5,
  'Fighting' = 6,
  'Poison' = 7,
  'Ground' = 8,
  'Flying' = 9,
  'Psychic' = 10,
  'Bug' = 11,
  'Rock' = 12,
  'Ghost' = 13,
  'Dragon' = 14,
  'Dark' = 15,
  'Steel' = 16,
  'Fairy' = 17,
}

export enum Region {
  none = -1,
  kanto = 0,
  johto = 1,
  hoenn = 2,
  sinnoh = 3,
  unova = 4,
  kalos = 5,
  alola = 6,
  galar = 7,
  // Throws an error if no region after the final region
  final = 8,
}

export enum WeatherType {
  Clear = 0,
  Overcast,
  Rain,
  Thunderstorm,
  Snow,
  Hail,
  Blizzard,
  Sunny,
  Sandstorm,
  Fog,
  Windy,
}
