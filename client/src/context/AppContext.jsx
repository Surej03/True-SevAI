import { createContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(null); //creating user state to verify whether the user is logged in or logged out for that it is null
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    const loadCreditBalance = async() => {
        try {
            const response = await axios.get(backendUrl + "/user/credits", {headers: {token}} )
            
            if (response.data) {
                setCredit(response.data.credits)
                setUser(response.data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message )

        }
    }
    
    const generateImage = async(prompt)=> {
        try {
           const response = await axios.post(backendUrl + "/image/generate-image", {prompt}, {headers: {token}})
    
           if (response.data){
            loadCreditBalance();
            return response.data.resultImage
           } else{
            toast.error(response.data.message)
            loadCreditBalance();
            if (response.data.creditBalance === 0) {
                navigate('/buycredits')
            }
           }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    }

    const logout = ()=> {
        localStorage.removeItem("token")
        setToken("")
        setUser(null)
        navigate('/')
    }


    useEffect(()=> {
        if(token){
            loadCreditBalance();
        }

    }, [token])

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit , loadCreditBalance, logout, generateImage
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;