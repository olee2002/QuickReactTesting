import React from 'react';

const Name = ({handleSort}) => (
  <button 
  className="btn btn-primary name" 
  name="name"
  onClick = {()=>handleSort('name')}
  >Name</button>
);

export default Name;
