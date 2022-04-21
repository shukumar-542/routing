import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Users = (props) => {
      const {name,email, id} = props.user
      const navigate = useNavigate()
      
      const handleDetails =(id)=>{
            const url  =`/about/${id}`
            navigate(url)
      }

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
                  <Link to={`/about/${id}`}>Show Details</Link>
                  <button onClick={()=>handleDetails(id)}>Details</button>
            </div>
      );
};

export default Users;