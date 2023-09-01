import React, {useState, useEffect} from 'react';
import axios from 'axios'

const FriendsList = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
      axios.get('http://localhost:3000/api/friends',{
        headers: {
          authorization: token
        }
      })      
      .then(res => {
        setFriends(res.data)
      })
  }, [])

    return (
    <div>
      <h2>FriendsList</h2>
      <ul>
        {
          friends.map(friends => {
              return <li>{friends.name} - {friends.age} - {friends.email}</li>
          })
        }
        
      </ul>
    </div>
    )
  }

  export default FriendsList