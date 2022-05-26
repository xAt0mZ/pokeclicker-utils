import { PokemonType, PokemonTypeColor } from '../../pokemon/pokemonType';

interface Props {
  type: PokemonType
}

export function Badge({type}: Props) {
  return (
    <span className="badge" style={{backgroundColor: PokemonTypeColor[type]}}>{PokemonType[type]}</span>
  )
}