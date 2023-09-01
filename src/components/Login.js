import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { push } = useHistory()
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/login', login)
             .then(res => {
                localStorage.setItem('token', res.data.payload)
                push('/friendslist')
             })
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input onChange={handleChange} id='username' />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }

  export default Login