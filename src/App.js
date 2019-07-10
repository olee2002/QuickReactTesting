import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: ""
    }

  }

  handleSort=(data)=> {
    return data.sort((a,b)=>a-b)
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age handleSort = {this.handleSort}></Age>
          <Name handleSort = {this.handleSort}></Name>
          <Points handleSort = {this.handleSort}></Points>
          <Rank handleSort = {this.handleSort}></Rank>
          <Table></Table>
        </div>
      </div>
    );
  }
}

