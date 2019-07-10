import React from 'react';

const Points = ({handleSort}) => (
  <button 
  className="btn btn-primary points" 
  name="points"
  onClick = {()=>handleSort('points')}
  >Points</button>
);

export default Points;
