import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
  	input: ''
  }

  handleChange = (e) => {
  	e.preventDefault()
  	this.setState({
  		input: e.target.value
  	})
  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	this.props.dispatch({type: 'ADD_TODO', payload:this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input 
              value={this.state.input} 
              onChange={this.handleChange} 
              type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
// 	return {addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData})}
// }

// export default connect(null, mapDispatchToProps)(CreateTodo);

// ABOVE IS SAME AS BELOW (WITH CHANGE TO LINE 19)

export default connect()(CreateTodo)