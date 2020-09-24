import React, { Component } from 'react';
import { Table, Button, Modal } from 'semantic-ui-react';
import PokeForm from './PokeForm';

class Pokemon extends Component {
  state = { editing: false }

  setOpen = () => this.setState({ editing: true })
  setClose = () => this.setState({ editing: false })

  render() {
    const { pName, ptype, level, color, id, releasePokemon } = this.props
    const { editing } = this.state
    return(
      <Table.Row>
        <Table.Cell>{pName}</Table.Cell>
        <Table.Cell>{ptype}</Table.Cell>
        <Table.Cell>{level}</Table.Cell>
        <Table.Cell>{color}</Table.Cell>
        <Table.Cell>
          <Button color='red' onClick={() => releasePokemon(id)}>
            Delete
          </Button>
          <Modal
            onClose={() => this.setClose()}
            open={editing}
            trigger={<Button onClick={() => this.setOpen()}>
              Edit
            </Button>}
          >
            <Modal.Header>Edit Pokemon</Modal.Header>
            <Modal.Content>
              <PokeForm {...this.props} setClose={this.setClose} />
            </Modal.Content>
          </Modal>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Pokemon;