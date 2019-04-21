import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import Todo from './components/todos/Todo'
import { connect } from 'react-redux'

class App extends Component {
  render() {

  	const todos = this.props.todos.map(todo => {
  	  return <Todo todo={todo} />
  	})

    return (
      <div className="App">
        <CreateTodo />
        {todos}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(App);
