// import{ createTestClient } from 'apollo-server-testing'

import { createApolloFetch } from 'apollo-fetch'

const fetch = createApolloFetch({
  uri: 'http://localhost:4000',
})

const charmanderTestJson = {"data":{"pokemonMany":[{"id":"4","name":"Charmander","num":"004","img":"http://www.serebii.net/pokemongo/pokemon/004.png"},{"id":"5","name":"Charmeleon","num":"005","img":"http://www.serebii.net/pokemongo/pokemon/005.png"},{"id":"6","name":"Charizard","num":"006","img":"http://www.serebii.net/pokemongo/pokemon/006.png"},{"id":"10","name":"Caterpie","num":"010","img":"http://www.serebii.net/pokemongo/pokemon/010.png"},{"id":"47","name":"Parasect","num":"047","img":"http://www.serebii.net/pokemongo/pokemon/047.png"},{"id":"56","name":"Mankey","num":"056","img":"http://www.serebii.net/pokemongo/pokemon/056.png"},{"id":"59","name":"Arcanine","num":"059","img":"http://www.serebii.net/pokemongo/pokemon/059.png"},{"id":"68","name":"Machamp","num":"068","img":"http://www.serebii.net/pokemongo/pokemon/068.png"},{"id":"90","name":"Shellder","num":"090","img":"http://www.serebii.net/pokemongo/pokemon/090.png"},{"id":"93","name":"Haunter","num":"093","img":"http://www.serebii.net/pokemongo/pokemon/093.png"},{"id":"101","name":"Electrode","num":"101","img":"http://www.serebii.net/pokemongo/pokemon/101.png"},{"id":"106","name":"Hitmonlee","num":"106","img":"http://www.serebii.net/pokemongo/pokemon/106.png"},{"id":"107","name":"Hitmonchan","num":"107","img":"http://www.serebii.net/pokemongo/pokemon/107.png"},{"id":"113","name":"Chansey","num":"113","img":"http://www.serebii.net/pokemongo/pokemon/113.png"},{"id":"121","name":"Starmie","num":"121","img":"http://www.serebii.net/pokemongo/pokemon/121.png"},{"id":"126","name":"Magmar","num":"126","img":"http://www.serebii.net/pokemongo/pokemon/126.png"},{"id":"130","name":"Gyarados","num":"130","img":"http://www.serebii.net/pokemongo/pokemon/130.png"}]}}
const fireTypeTestJson = {"data":{"pokemonMany":[{"id":"4","name":"Charmander","num":"004","img":"http://www.serebii.net/pokemongo/pokemon/004.png"},{"id":"5","name":"Charmeleon","num":"005","img":"http://www.serebii.net/pokemongo/pokemon/005.png"},{"id":"6","name":"Charizard","num":"006","img":"http://www.serebii.net/pokemongo/pokemon/006.png"},{"id":"37","name":"Vulpix","num":"037","img":"http://www.serebii.net/pokemongo/pokemon/037.png"},{"id":"38","name":"Ninetales","num":"038","img":"http://www.serebii.net/pokemongo/pokemon/038.png"},{"id":"58","name":"Growlithe","num":"058","img":"http://www.serebii.net/pokemongo/pokemon/058.png"},{"id":"59","name":"Arcanine","num":"059","img":"http://www.serebii.net/pokemongo/pokemon/059.png"},{"id":"77","name":"Ponyta","num":"077","img":"http://www.serebii.net/pokemongo/pokemon/077.png"},{"id":"78","name":"Rapidash","num":"078","img":"http://www.serebii.net/pokemongo/pokemon/078.png"},{"id":"126","name":"Magmar","num":"126","img":"http://www.serebii.net/pokemongo/pokemon/126.png"},{"id":"136","name":"Flareon","num":"136","img":"http://www.serebii.net/pokemongo/pokemon/136.png"},{"id":"146","name":"Moltres","num":"146","img":"http://www.serebii.net/pokemongo/pokemon/146.png"}]}}
const rockWeaknessTestJson = {"data":{"pokemonMany":[{"id":"4","name":"Charmander","num":"004","img":"http://www.serebii.net/pokemongo/pokemon/004.png"},{"id":"5","name":"Charmeleon","num":"005","img":"http://www.serebii.net/pokemongo/pokemon/005.png"},{"id":"6","name":"Charizard","num":"006","img":"http://www.serebii.net/pokemongo/pokemon/006.png"},{"id":"10","name":"Caterpie","num":"010","img":"http://www.serebii.net/pokemongo/pokemon/010.png"},{"id":"11","name":"Metapod","num":"011","img":"http://www.serebii.net/pokemongo/pokemon/011.png"},{"id":"12","name":"Butterfree","num":"012","img":"http://www.serebii.net/pokemongo/pokemon/012.png"},{"id":"13","name":"Weedle","num":"013","img":"http://www.serebii.net/pokemongo/pokemon/013.png"},{"id":"14","name":"Kakuna","num":"014","img":"http://www.serebii.net/pokemongo/pokemon/014.png"},{"id":"15","name":"Beedrill","num":"015","img":"http://www.serebii.net/pokemongo/pokemon/015.png"},{"id":"16","name":"Pidgey","num":"016","img":"http://www.serebii.net/pokemongo/pokemon/016.png"},{"id":"17","name":"Pidgeotto","num":"017","img":"http://www.serebii.net/pokemongo/pokemon/017.png"},{"id":"18","name":"Pidgeot","num":"018","img":"http://www.serebii.net/pokemongo/pokemon/018.png"},{"id":"21","name":"Spearow","num":"021","img":"http://www.serebii.net/pokemongo/pokemon/021.png"},{"id":"22","name":"Fearow","num":"022","img":"http://www.serebii.net/pokemongo/pokemon/022.png"},{"id":"37","name":"Vulpix","num":"037","img":"http://www.serebii.net/pokemongo/pokemon/037.png"},{"id":"38","name":"Ninetales","num":"038","img":"http://www.serebii.net/pokemongo/pokemon/038.png"},{"id":"41","name":"Zubat","num":"041","img":"http://www.serebii.net/pokemongo/pokemon/041.png"},{"id":"42","name":"Golbat","num":"042","img":"http://www.serebii.net/pokemongo/pokemon/042.png"},{"id":"46","name":"Paras","num":"046","img":"http://www.serebii.net/pokemongo/pokemon/046.png"},{"id":"47","name":"Parasect","num":"047","img":"http://www.serebii.net/pokemongo/pokemon/047.png"},{"id":"48","name":"Venonat","num":"048","img":"http://www.serebii.net/pokemongo/pokemon/048.png"},{"id":"49","name":"Venomoth","num":"049","img":"http://www.serebii.net/pokemongo/pokemon/049.png"},{"id":"58","name":"Growlithe","num":"058","img":"http://www.serebii.net/pokemongo/pokemon/058.png"},{"id":"59","name":"Arcanine","num":"059","img":"http://www.serebii.net/pokemongo/pokemon/059.png"},{"id":"77","name":"Ponyta","num":"077","img":"http://www.serebii.net/pokemongo/pokemon/077.png"},{"id":"78","name":"Rapidash","num":"078","img":"http://www.serebii.net/pokemongo/pokemon/078.png"},{"id":"83","name":"Farfetch'd","num":"083","img":"http://www.serebii.net/pokemongo/pokemon/083.png"},{"id":"84","name":"Doduo","num":"084","img":"http://www.serebii.net/pokemongo/pokemon/084.png"},{"id":"85","name":"Dodrio","num":"085","img":"http://www.serebii.net/pokemongo/pokemon/085.png"},{"id":"87","name":"Dewgong","num":"087","img":"http://www.serebii.net/pokemongo/pokemon/087.png"},{"id":"91","name":"Cloyster","num":"091","img":"http://www.serebii.net/pokemongo/pokemon/091.png"},{"id":"123","name":"Scyther","num":"123","img":"http://www.serebii.net/pokemongo/pokemon/123.png"},{"id":"124","name":"Jynx","num":"124","img":"http://www.serebii.net/pokemongo/pokemon/124.png"},{"id":"126","name":"Magmar","num":"126","img":"http://www.serebii.net/pokemongo/pokemon/126.png"},{"id":"127","name":"Pinsir","num":"127","img":"http://www.serebii.net/pokemongo/pokemon/127.png"},{"id":"130","name":"Gyarados","num":"130","img":"http://www.serebii.net/pokemongo/pokemon/130.png"},{"id":"131","name":"Lapras","num":"131","img":"http://www.serebii.net/pokemongo/pokemon/131.png"},{"id":"136","name":"Flareon","num":"136","img":"http://www.serebii.net/pokemongo/pokemon/136.png"},{"id":"142","name":"Aerodactyl","num":"142","img":"http://www.serebii.net/pokemongo/pokemon/142.png"},{"id":"144","name":"Articuno","num":"144","img":"http://www.serebii.net/pokemongo/pokemon/144.png"},{"id":"145","name":"Zapdos","num":"145","img":"http://www.serebii.net/pokemongo/pokemon/145.png"},{"id":"146","name":"Moltres","num":"146","img":"http://www.serebii.net/pokemongo/pokemon/146.png"},{"id":"149","name":"Dragonite","num":"149","img":"http://www.serebii.net/pokemongo/pokemon/149.png"}]}}
const oddishTest = {"data":{"pokemonMany":[{"id":"43","name":"Oddish","num":"043","img":"http://www.serebii.net/pokemongo/pokemon/043.png"}]}}

// Test Search only
it('fetches charmander fuzzy query', async () => {
  await fetch({
    query:
      '{ pokemonMany(searchValue: "Charmander") {id,name,num,img}}',
  }).then(res => {
    expect(res).toMatchObject(charmanderTestJson)
  })
})

// Test Type only
it('fetches fire type query', async () => {
    await fetch({
      query:
        '{ pokemonMany(typeFilter: ["Fire"]) {id,name,num,img}}',
    }).then(res => {
      expect(res).toMatchObject(fireTypeTestJson)
    })
  })

  //Test Weakness only
  it('fetches rock weakness query', async () => {
    await fetch({
      query:
        '{ pokemonMany(weaknessFilter: ["Rock"]) {id,name,num,img}}',
    }).then(res => {
      expect(res).toMatchObject(rockWeaknessTestJson)
    })
  })

  // Test combonation of all three
  it('fetches Oddish with partial and types query', async () => {
    await fetch({
      query:
        '{ pokemonMany(searchValue: "Odd",typeFilter: ["Grass"],weaknessFilter: ["Psychic"]) {id,name,num,img}}',
    }).then(res => {
      expect(res).toMatchObject(oddishTest)
    })
  })
