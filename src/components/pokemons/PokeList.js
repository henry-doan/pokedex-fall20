import React from 'react';
import { Table } from 'semantic-ui-react';
import Pokemon from './Pokemon';

const PokeList = ({ pokemons, updatePokemon, releasePokemon }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Level</Table.HeaderCell>
        <Table.HeaderCell>Color</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        pokemons.map( p => (
          <Pokemon 
            key={p.id} 
            {...p} 
            updatePokemon={updatePokemon} 
            releasePokemon={releasePokemon}
          />
          // pName={p.pName} pType={p.pType} ...
        ))
      }
    </Table.Body>
  </Table>
)

export default PokeList;