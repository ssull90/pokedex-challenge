import { ApolloServer, gql, IResolvers } from 'apollo-server'
import sortBy from 'lodash/sortBy'
import find from 'lodash/find'
import pokemon from './pokemon.json'
import Fuse from 'fuse.js'

//FUSE (Fuzzy Search) config
const fuzzyOptions = {
  isCaseSensitive: false,
  findAllMatches: true,
  includeMatches: false,
  includeScore: false,
  ignoreLocation: true,
  useExtendedSearch: false,
  threshold: 0.6,
  minMatchCharLength: 0,
  keys: ['name'],
}

const fuse = new Fuse(Object.values(pokemon), fuzzyOptions)

interface Pokemon {
  id: string
  num: string
  name: string
  img: string
  types: string[]
  weaknesses: string[]
  height: string
  weight: string
  egg: string
  prevEvolutions?: Array<{ num: string; name: string }>
  nextEvolutions?: Array<{ num: string; name: string }>
  candy?: string
  candyCount?: number
}

const typeDefs = gql`
  type Pokemon {
    id: ID!
    num: ID!
    name: String!
    img: String!
    types: [String!]!
    weaknesses: [String!]!
    height: String!
    weight: String!
    egg: String!
    prevEvolutions: [Pokemon!]!
    nextEvolutions: [Pokemon!]!
    candy: String
    candyCount: Int
  }

  type Query {
    pokemonMany(
      skip: Int
      limit: Int
      searchValue: String
      typeFilter: [String]
      weaknessFilter: [String]
    ): [Pokemon!]!
    pokemonOne(id: ID!): Pokemon
  }
`

const resolvers: IResolvers<any, any> = {
  Pokemon: {
    prevEvolutions(rawPokemon: Pokemon) {
      return (
        rawPokemon.prevEvolutions?.map(evolution =>
          find(pokemon, otherPokemon => otherPokemon.num === evolution.num)
        ) || []
      )
    },
    nextEvolutions(rawPokemon: Pokemon) {
      return (
        rawPokemon.nextEvolutions?.map(evolution =>
          find(pokemon, otherPokemon => otherPokemon.num === evolution.num)
        ) || []
      )
    },
  },
  Query: {
    pokemonMany(
      _,
      {
        skip = 0,
        limit = 999,
        searchValue,
        typeFilter,
        weaknessFilter,
      }: { skip?: number; limit?: number; searchValue?: string; typeFilter?: Array<string>; weaknessFilter?: Array<string> }
    ): Pokemon[] {
      let filteredList = Object.values(pokemon)
      // If there is a search value provided we will fuzzy search and filter the list
      if (searchValue) {
        let fuseResults = fuse.search(searchValue)
        filteredList = fuseResults.map(value => value.item)
      }
      //Filter Type Would be O(n^2) if a search happened the n value (151) of pokemon is reduced for each run through
      //of types 151 should be filtered so next run is reduced (filter what's alreay filtered)
      if (typeFilter && typeFilter.length > 0) {
        typeFilter.forEach(type => {
          filteredList = filteredList.filter(listItem => {
            if (listItem.types.includes(type)) {
              return true
            }
            return false
          })
        })
      }
      //Filter Weakness after Type so it's O(n^2) but the 151 should be reduced
      if (weaknessFilter && weaknessFilter.length > 0) {
        weaknessFilter.forEach(weakness => {
          filteredList = filteredList.filter(listItem => {
            if (listItem.weaknesses.includes(weakness)) {
              return true
            }
            return false
          })
        })
      }
      return sortBy(filteredList, poke => parseInt(poke.id, 10)).slice(
        skip,
        limit + skip
      )
    },
    pokemonOne(_, { id }: { id: string }): Pokemon {
      return (pokemon as Record<string, Pokemon>)[id]
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
