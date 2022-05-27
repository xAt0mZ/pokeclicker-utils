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

export const RegionsCount = Object.keys(Region).length / 2 - 2;