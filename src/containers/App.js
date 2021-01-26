import * as React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

export interface IMonster {
  name: string;
  id: Number;
  email: string;
}

interface IAppProps {}

interface IAppState {
  monsters: Array<IMonster>;
  searchField: '';
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchField: event.currentTarget.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !monsters.length ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>Monster Rolodex</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredMonsters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
