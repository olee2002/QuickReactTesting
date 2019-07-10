import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
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
      console.log('user', users)
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
               <td>{users.map(user=><div>{user.age}</div>)}</td>
               <td>{users.map(user=><div>{user.name}</div>)}</td>
               <td>{users.map(user=><div>{user.points}</div>)}</td>
               <td>{users.map(user=><div>{user.rank}</div>)}</td>

            </tbody>
			</table>
		</div>)
	}
}
