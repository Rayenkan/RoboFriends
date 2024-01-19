import React, { Component } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({robots:users}))

  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  };

  render() {
    const filteredrobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0 ){
      return (
            <div className="flex justify-center items-center vh-100 ma0">  <h1 class='tc'>Loading</h1></div>)
    }
    else {
      return (
        <div className="tc">
          <h1>Robot Friends</h1>
          <SearchBox SearchChange={this.onSearchChange} />
          <CardList robots={filteredrobots} />
        </div>
      );
    }
    
  }
}

export default App;
