import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthenticatedRoute = ({children}) => {
    // const {isAuthenticated} = useSelector((state) => state.auth)

    // if(!isAuthenticated){
    //     return <Navigate to="/login" replace />
    // }

  return children
}

export default AuthenticatedRoute