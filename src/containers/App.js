import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { CardList } from '../components/card-list/card-list.component';
import { SearchBox } from '../components/search-box/search-box.component';
import { requestMonsters, setSearchField } from '../actions';

class App extends Component {
  //  const [monsters, setMonsters] = useState([]);
  //  const [searchField, setSearchField] = useState('');
  //  constructor() {
  //    super();

  //    this.state = {
  //      monsters: [],
  //      searchField: '',
  //    };

  //    // this.handleChange = this.handleChange.bind(this)
  //  }

  componentDidMount() {
    this.props.onRequestMonsters();
    //fetch(`https://jsonplaceholder.typicode.com/users`)
    //  .then(response => response.json())
    //  .then(users => this.setState({ monsters: users }));
  }

  //  useEffect(() => {
  //    fetch(`https://jsonplaceholder.typicode.com/users`)
  //      .then(response => response.json())
  //      .then(users => setMonsters(users));
  //  }, [count]);

  //const handleChange = e => {
  //	setSearchField(e.target.value);
  //  };

  render() {
    //const { monsters } = this.state;
    const { searchField, onSearchChange, monsters, isPending } = this.props;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
    error: state.requestMonsters.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
