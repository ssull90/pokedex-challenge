import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { useQuery, gql } from '@apollo/client'
import { Container as NesContainer } from 'nes-react'

const Container = styled(NesContainer)`
  && {
    background: white;
    margin: 2rem 25%;

    ::after {
      z-index: unset;
      pointer-events: none;
    }
  }
`

const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`

const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;

  > *:first-child {
    margin-right: 1rem;
  }
`

const POKEMON_MANY = gql`
  query(
    $skip: Int
    $limit: Int
    $searchValue: String
    $typeFilter: [String]
    $weaknessFilter: [String]
  ) {
    pokemonMany(
      skip: $skip
      limit: $limit
      searchValue: $searchValue
      typeFilter: $typeFilter
      weaknessFilter: $weaknessFilter
    ) {
      id
      name
      num
      img
    }
  }
`

// Moved this into a new file so I could keep state control from refreshing inputs in search menus
const PokemonList: React.FC<{
  clickLink: Function
  searchValue?: string
  typeFilter?: string[]
  weaknessFilter?: string[]
}> = ({ clickLink, searchValue, typeFilter, weaknessFilter }) => {
  const { loading, error, data } = useQuery(POKEMON_MANY, {
    variables: { searchValue, typeFilter, weaknessFilter },
  })
  const pokemonList:
    | Array<{ id: string; name: string; img: string; num: string }>
    | undefined = data?.pokemonMany

  if (loading) {
    return <p>Loading...</p>
  }
  if (error || !pokemonList) {
    return <p>Error!</p>
  }

  return (
    <Container rounded>
      <List>
        {pokemonList.map(pokemon => (
          <Link to={pokemon.id} onMouseDown={clickLink as any}>
            <ListItem>
              <img src={pokemon.img} />
              {pokemon.name} - {pokemon.num}
            </ListItem>
          </Link>
        ))}
      </List>
    </Container>
  )
}

export default PokemonList
