import React from 'react';

const Age = ({handleSort}) => (
  <button 
  className="btn btn-primary age" 
  name="age"
  onClick = {()=>handleSort('age')}
  >Age</button>
);

export default Age;
