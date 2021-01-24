import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestMonsters } from '../actions';

import MainPage from '../components/MainPage';

import './App.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
