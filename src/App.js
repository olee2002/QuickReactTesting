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
    const sortedUsers = users.sort((a,b)=>a[key]-b[key])
    this.setState({users: sortedUsers})
  }

  handleUserData = (key)=>{
   const { users } = this.state
   return users.map(user=>({[key]:user[key]}))
  }

  render() {
   const { users } = this.state
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age handleSort = {this.handleSort} users={users} ></Age>
          <Name handleSort = {this.handleSort} users={users}></Name>
          <Points handleSort = {this.handleSort} users={users}></Points>
          <Rank handleSort = {this.handleSort} users={users}> </Rank>
          <Table></Table>
        </div>
      </div>
    );
  }
}

