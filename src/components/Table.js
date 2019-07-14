import React, {Component} from 'react';
import {usersJSON} from '../data';


export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
         users: props.users,
         sortBy:props.sortBy
      }
      const url = window.location.href
      const locationArr = url.split('/')
      const location = locationArr[locationArr.length-1]
      if(url.includes(location)){
       props.handleSort(location)
      } 
	}

	componentWillReceiveProps() {
	}

    // complete the comparators
	compareByAge(a, b) {
	}

	compareByName(a, b) {
		
	}

	compareByPoints(a, b) {
		
	}

	compareByRank(a, b) {
		
	}

	render() {
      const { users } = this.state
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
               {users.map((user, i)=>
               <tr key={i}>
                  <td>{user.age}</td>
                  <td>{user.name}</td>
                  <td>{user.points}</td>
                  <td>{user.rank}</td>
               </tr>)}
            </tbody>
			</table>
		</div>)
	}
}
