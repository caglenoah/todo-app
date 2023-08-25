// create a class based component
import React from 'react';
import './App.css';

class App extends React.Component { //extend to use the methods and variables off the parent Component
  constructor(props) {
    super(props); // access the parent properties

    // concept of state - keeping track of the data
    this.state = {
      // set the key/values i want to track
      todos: [],
      text: "",
      isClicked: false
    };

this.handleClick = this.handleClick.bind(this) // fixes the issue we had on line 35 binds handle click to this because our issue was that line 35 was outside the scope of the constructor. This binds it and allows us to maintain the bind outside of the scope of the constructor

  } // end of constructor

  // add a button that fires a handleClick method when clicked
  // add an h1 or p with ternary operartor to confirm the toggle works

  // remember this and bind?
  //we've lost the bind because we're rendering outside of the scope of the constructor
  //use arrow function to solve the bind problem
  // because arrow functions do not get their own "this" keyword - they inherit from the parent
  handleClick() {
    this.setState({
      //isClicked: true // this only works one time
         isClicked: !this.state.isClicked             // to toggle, we negate the state every time 
    })
  } 
  
  // now let's add a text input to render/return and a function that handles the state change of the input
  // capture the changes in the text input field
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

//make a handle submit button that adds a todo to the todo array
  
  handleSubmit = () => {
    this.setState({
      //todos: [this.state.text] // at this point is doesn't clear the text field and it overwrites the previous todo

      // use spread(...) to get all the existing todos first
      //add the next submitted one to the end
      todos: [...this.state.todos, this.state.text], 
      text: ""

    })
  }
  

  render() { // when using class based, you must wrap the return in a render method
    return (
      <div className='App'>
        <input type='text' onChange={this.handleChange} value={this.state.text} />
       Enter a Todo: <h1>{this.state.isClicked ? "Clicked" : "Not Clicked"}</h1>
        <button onClick={this.handleSubmit}>Add Todo</button>

        <ul>
          {this.state.todos.map((todo) => {
            return <li>{todo}</li>
          })}
        </ul>
      </div>
  );
}



} // end of class


export default App;
