import React from 'react'
import PokemonList from './PokemonList'
import renderer from 'react-test-renderer'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

it('Pokemon Renders Correctly', () => {
  const tree = renderer
    .create(
      <ApolloProvider client={client}>
        <PokemonList
          clickLink={() => {
            return
          }}
          searchValue={'Eevee'}
          typeFilter={['Normal']}
          weaknessFilter={['Fighting']}
        />
      </ApolloProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
