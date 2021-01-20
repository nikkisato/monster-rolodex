import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);
  //  constructor() {
  //    super();

  //    this.state = {
  //      monsters: [],
  //      searchField: '',
  //    };

  //    // this.handleChange = this.handleChange.bind(this)
  //  }

  //  componentDidMount() {
  //    fetch(`https://jsonplaceholder.typicode.com/users`)
  //      .then(response => response.json())
  //      .then(users => this.setState({ monsters: users }));
  //  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => setMonsters(users));
    console.log(count);
  }, [count]);

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return !monsters.length ? (
    <h1>Loading</h1>
  ) : (
    <div className='App'>
      <h1>Monster Rolodex</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>

      <SearchBox placeholder='search monsters' handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
