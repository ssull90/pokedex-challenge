import React from 'react'
import Pokemon from './Pokemon'
import renderer from 'react-test-renderer'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

it('PokemonList Renders Correctly with Eevee Search', () => {
  const tree = renderer
    .create(
      <ApolloProvider client={client}>
        <Pokemon
          clickLink={() => {
            return
          }}
        />
      </ApolloProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
