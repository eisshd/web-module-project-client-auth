import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem('token')) {
            return(<Component {...props}/>)
        } else {
            return <Route exact path='/login' element={<Login/>}/>
        }
    }}/>
}

export default PrivateRoute