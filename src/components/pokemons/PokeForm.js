import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PokeForm extends Component {
  state = { pName: '', ptype: '', level: 0, color: '' }

  componentDidMount() {
    if (this.props.id) {
      const { pName, ptype, level, color, id } = this.props
      this.setState({ pName, ptype, level, color, id })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updatePokemon, id, setClose } = this.props
      updatePokemon(id, this.state)
      setClose()
    } else {
      this.props.addPokemon(this.state)
    }
    this.setState({ pName: '', ptype: '', level: 0, color: '' })
  }

  render() {
    const { pName, ptype, level, color } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='pName'
          value={pName}
          onChange={this.handleChange}
          required
          label='Name'
        />
        <Form.Input
          name='ptype'
          value={ptype}
          onChange={this.handleChange}
          required
          label='Type'
        />
        <Form.Input
          name='level'
          value={level}
          onChange={this.handleChange}
          required
          label='Level'
        />
        <Form.Input
          name='color'
          value={color}
          onChange={this.handleChange}
          required
          label='Color'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
} 


export default PokeForm;