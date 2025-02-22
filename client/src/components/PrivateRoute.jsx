import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const PrivateRoute = ({element}) => {
    const {user } = useContext(AppContext);
    const navigate = useNavigate()

    useEffect(()=>{
        if (!user) {
            toast.error("You need to log in first!")
            navigate("/");
    
        }
    },[user, navigate]);

  return user ? element : null
}

export default PrivateRoute;