import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
  }
  handleRemove = () => {
    this.props.removeTodo(this.props.id)
  }
  render() {
    return (
      <div>
        {this.props.task}
        <button>edit</button>
        <button onClick={this.handleRemove}>x</button>
      </div>
    )
  }
}
