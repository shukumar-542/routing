import React from 'react';

const Users = (props) => {
      const {name,email} = props.user

      const userStyle ={
            border : '1px solid purple',
            margin :'20px',
            padding :'10px',
            textAlign : 'center'
      }
      return (
            <div style={userStyle}>
                  <h1>Name : {name}</h1>
                  <p>Email : {email}</p>
            </div>
      );
};

export default Users;