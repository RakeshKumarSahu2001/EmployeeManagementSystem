import React from 'react'
import LoginFrom from '../../Components/Auth/LoginFrom.jsx'
import { LoginApi } from '../../Store/Auth/Login.js'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'


function LoginPage() {

  const dispatch=useDispatch()
  const isUserExist=useSelector((state)=>state?.login?.isUserExist)
  const navigate=useNavigate();
  const onSubmitFromHandler = async (data) => {
    try {
      await dispatch(LoginApi(data))
      if(isUserExist){
        navigate("/deshboard")
      }

    } catch (error) {
    }
  }
  return (
    <div>
      <LoginFrom
        onSubmitFromHandler={onSubmitFromHandler} />
    </div>
  )
}

export default LoginPage