import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Logout = () => {
    useEffect (() => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then (res => {
            localStorage.removeItem('token')
            push('/login')
        })
    }, [])

    return (

        <div>

        </div>)
}

export default Logout