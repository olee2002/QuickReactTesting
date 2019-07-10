import React from 'react';

const Rank = ({ handleSort}) => (
  <button 
  className="btn btn-primary rank" 
  name="rank"
  onClick = {()=>handleSort('rank')}
  >Rank</button>
);

export default Rank;
