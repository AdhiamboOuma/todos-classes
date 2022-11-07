import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
        this.handleTask = this.handleTask.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleTask(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.createTodo({...this.state, id: uuid()})
        this.setState({task: ''})
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New-Todo</label>
        <input type="text" placeholder='newtodo' id='task' name='task' value={this.state.task} onChange={this.handleTask} />
        <button>add-todo</button>
      </form>
    )
  }
}
