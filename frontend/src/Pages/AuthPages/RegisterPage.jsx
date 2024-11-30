import React from 'react'
import RegFrom from '../../Components/Auth/RegFrom.jsx'
import { RegisterApi } from "../../Store/Auth/Register.js"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const onSubmitFromHandler = async(data) => {
    try {
      dispatch(RegisterApi(data));
      navigate("/login")
    } catch (error) {
    }
  }
  return (
    <div>
      <RegFrom
        onSubmitFromHandler={onSubmitFromHandler}
      />
    </div>
  )
}

export default RegisterPage