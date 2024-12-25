import React from 'react'
import { useDispatch } from 'react-redux'
import {Button} from "../index";
import { logout } from "../../store/authSlice";
import authServices from "../appwrite/auth";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler =() =>{
        authServices.logout().then(() =>{
            dispatch(logout())
        })
    }

  return (
    <Button onClick={logoutHandler}>Log Out</Button>
  )
}

export default LogoutBtn