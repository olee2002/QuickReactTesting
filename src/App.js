import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';
import {usersJSON} from './data';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: "",
		users: usersJSON
    }
  }

  handleSort=(key)=> {
   const { users } = this.state
   if(key==='name'){
      const sortedUsers = users.sort(function(a, b){
         if(a.name < b.name) { return -1; }
         if(a.name > b.name) { return 1; }
         return 0;
     })
     this.setState({users: sortedUsers, sortBy:key})
   }
    const sortedUsers = users.sort((a,b)=>a[key]-b[key])
    this.setState({users: sortedUsers, sortBy:key})
  }

  render() {
   const { users, sortBy } = this.state
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age handleSort = {this.handleSort} users={users} sortBy={sortBy}></Age>
          <Name handleSort = {this.handleSort} users={users} sortBy={sortBy}></Name>
          <Points handleSort = {this.handleSort} users={users} sortBy={sortBy}></Points>
          <Rank handleSort = {this.handleSort} users={users} sortBy={sortBy}> </Rank>
          <Table users={users} handleSort = {this.handleSort} sortBy={sortBy}></Table>
        </div>
      </div>
    );
  }
}

