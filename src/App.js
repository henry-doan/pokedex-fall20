import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import PokeList from './components/pokemons/PokeList';
import PokeForm from './components/pokemons/PokeForm';

class App extends Component {
  state = { pokemons: [
    { id: 1, pName: 'Pikachu', ptype: 'electric', level: 5, color: 'Yellow' },
    { id: 2, pName: 'Squirtle', ptype: 'water', level: 6, color: 'blue' },
    { id: 3, pName: 'Riolu', ptype: 'fighting', level: 7, color: 'blue' },
  ], color: 'green', owner: 'Henry' }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addPokemon = (incomingPokemon) => {
    const { pokemons } = this.state 
    let newPokemon = { id: this.getId(), ...incomingPokemon }
    this.setState({ pokemons: [ ...pokemons, newPokemon ]})
  }

  updatePokemon = (id, updatedPokemon) => {
    const { pokemons } = this.state 
    this.setState({
      pokemons: pokemons.map( p => {
        if (p.id === id) {
          return updatedPokemon
        }
        return p
      })
    })
  }

  releasePokemon = (id) => {
    const pokemons = this.state.pokemons.filter( p => {
      if (p.id !== id ) {
        return p 
      }
      return null;
    })
    this.setState({ pokemons })
  }

  render() {
    const { pokemons, color, owner } = this.state
    // const pokemons = this.state.pokemons
    // const color = this.state.color
    // const owner = this.state.owner
    return (
      <Container>
        <Header textAlign='center' color={color}>{owner}'s Pokedex</Header>
        <PokeForm addPokemon={this.addPokemon} />
        <PokeList 
          pokemons={pokemons}
          updatePokemon={this.updatePokemon} 
          releasePokemon={this.releasePokemon}
        />
      </Container>
    )
  }
}

export default App;
