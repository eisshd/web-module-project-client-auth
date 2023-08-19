import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';


function App() {
  return (

      <div className="App">
      <h2>Client Auth Project</h2>
      <header>
        <h2>Friends</h2>
        <Link className='links' to='login'>Login</Link>
        <Link className='links' to='friendslist'>Friends List</Link>
        <Link className='links' to='friendslist/add'>Add Friend</Link>
        <Link className='links' to='friendslist'>Logout</Link>
      </header>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/friendslist' element={<FriendsList />}/>
        <Route exact path='/friendslist/add' element={<AddFriend />}/>
      </Routes>
      </div>
  );
}

export default App;
