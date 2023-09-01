import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/PrivateRoute';

function App() {
  return (

      <div className="App">
      <h2>Client Auth Project</h2>
      <header>
        <h2>Friends</h2>
        <Link className='links' to='login'>Login</Link>
        <Link className='links' to='/friendslist'>Friends List</Link>
        <Link className='links' to='/friendslist/add'>Add Friend</Link>
        <Link className='links' to='/logout'>Logout</Link>
      </header>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <PrivateRoute exact path='/friendslist' component={FriendsList}/>
        <PrivateRoute exact path='/friendslist/add' component={AddFriend}/>
        <PrivateRoute exact path='/logout' component={Logout}/>
      </Routes>
      </div>
  );
}

export default App;
