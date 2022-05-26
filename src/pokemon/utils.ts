import { PokemonType } from './pokemonType';

export function generateTypeImage(type: PokemonType){
  return `/assets/images/gems/${PokemonType[type]} Gem.png`
}