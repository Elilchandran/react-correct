import React from 'react';
function Nag(props) {
console.log(props);
    return (
      <div>
        <p>Hello{props.name},her age{props.age}</p>
      </div>
    );
  }



export default Nag;