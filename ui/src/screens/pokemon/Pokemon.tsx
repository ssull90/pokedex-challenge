import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { Container as NesContainer } from 'nes-react'
import Select from 'react-select'
import PokemonList from './PokemonList'

const Container = styled(NesContainer)`
  && {
    background: white;
    margin: 0 25%;

    ::after {
      z-index: unset;
      pointer-events: none;
    }
  }
`
// Types for the dropdown
const types = [
  { value: 'Normal', label: 'Normal' },
  { value: 'Fighting', label: 'Fighting' },
  { value: 'Flying', label: 'Flying' },
  { value: 'Poison', label: 'Poison' },
  { value: 'Ground', label: 'Ground' },
  { value: 'Rock', label: 'Rock' },
  { value: 'Bug', label: 'Bug' },
  { value: 'Ghost', label: 'Ghost' },
  { value: 'Steel', label: 'Steel' },
  { value: 'Fire', label: 'Fire' },
  { value: 'Water', label: 'Water' },
  { value: 'Grass', label: 'Grass' },
  { value: 'Electric', label: 'Electric' },
  { value: 'Psychic', label: 'Psychic' },
  { value: 'Ice', label: 'Ice' },
  { value: 'Dragon', label: 'Dragon' },
  { value: 'Dark', label: 'Dark' },
  { value: 'Fairy', label: 'Fairy' },
]

const Pokemon: React.FC<RouteComponentProps & { clickLink: Function }> = ({
  clickLink,
}) => {
  const [searchValue, setSearchValue] = React.useState('')
  const [typeFilter, setTypeFilter] = React.useState([] as string[])
  const [weaknessFilter, setWeaknessFilter] = React.useState([] as string[])

  const handleWeaknessChange = (result: any) => {
    // Due to react-select returning null when emptied we need to change this to an empt array to properly
    //affect state
    if (!result) {
      result = []
    }
    setWeaknessFilter(result.map((value: any) => value.value))
  }

  const handleTypeChange = (result: any) => {
    // Due to react-select returning null when emptied we need to change this to an empt array to properly
    //affect state
    if (!result) {
      result = []
    }
    setTypeFilter(result.map((value: any) => value.value))
  }

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <Container rounded>
        <span>Pokémon Search: </span>
        <input
          onPasteCapture={handleSearchChange}
          onKeyUp={handleSearchChange}
        ></input>
        <div>
          <span>Filter by: </span>
          <div>
            <span>Type: </span>
            <Select
              closeMenuOnSelect={false}
              isMulti
              options={types}
              onChange={handleTypeChange}
            />
          </div>
          <div>
            <span>Weakness: </span>
            <Select
              closeMenuOnSelect={false}
              isMulti
              options={types}
              onChange={handleWeaknessChange}
            />
          </div>
        </div>
      </Container>
      <PokemonList
        clickLink={clickLink}
        searchValue={searchValue}
        typeFilter={typeFilter}
        weaknessFilter={weaknessFilter}
      />
    </div>
  )
}

export default Pokemon
