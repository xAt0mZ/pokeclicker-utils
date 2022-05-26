import { PokemonType } from './pokemonType';

export function generateGemImagePath(type: PokemonType){
  return `/assets/images/gems/${PokemonType[type]} Gem.png`
}
