import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import Loading from '../pages/Loading'

const PrivateRoute = ({ children }) => {
    const {loading ,user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    
    if(loading){
       return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}

export default PrivateRoute