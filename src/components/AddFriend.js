import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const AddFriend = () => {
    const [form, setForm] = useState({
      name: '',
      age: '',
      email: ''
    })
    const { push } = useHistory()
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
      axios.post('http://localhost:9000/api/friends', form, {
        headers: {
          authorization: token
        }
      })      
      .then(res => {
        push('/friends')
      })
    }



    return (
      <div>
        <h2>AddFriend</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Username:</label>
            <input onChange={handleChange} id='name' />
          </div>
          <div>
            <label htmlFor='age'>Age:</label>
            <input onChange={handleChange} id='age'/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input onChange={handleChange} id='email' />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }

export default AddFriend
  