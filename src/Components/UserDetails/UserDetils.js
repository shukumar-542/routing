import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetils = () => {
      const {userId} = useParams()
      const [user, setUser] = useState({})

      useEffect(()=>{
            const urls = `https://jsonplaceholder.typicode.com/users/${userId}`
            fetch(urls)
            .then(res =>res.json())
            .then(data =>{
                   setUser(data)
                  console.log(data);
                  })
      },[])
      return (
            <div>
                  <h1>User Details {userId} </h1>
                  <p>{user.name}</p>
                  
                  
            </div>
      );
};

export default UserDetils;