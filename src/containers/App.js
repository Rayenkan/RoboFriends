import React, { useState, useEffect } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []); // Empty dependency array to mimic componentDidMount

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (robots.length === 0) {
    return (
      <div className="flex justify-center items-center vh-100 ma0">
        <h1 className='tc'>Loading</h1>
      </div>
    );
  } else {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox SearchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
};

export default App;
