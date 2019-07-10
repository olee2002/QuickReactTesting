import React, {Component} from 'react';
import {usersJSON} from '../data';


export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: props.users
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
               {users.map(user=>
               <tr key={user.id}>
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
