import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { LoginSlice } from '../Store/Auth/Login'

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username=localStorage.getItem("username")
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    dispatch(LoginSlice.actions.clearLoginUserInfoFromLocalStorage())
    navigate("/")
  }

  return (
    <nav>
      <div className='flex flex-row justify-between'>
        <h3>Logo</h3>
        <div className='flex flex-row gap-5'>
        {token && <Link
            to={"/deshboard"}>Home</Link>}
           {token && <Link
            to={"/employee/all-employee"}>Employee</Link>}
          {role === "admin" && <Link
            to={"/employee/registration"}>Create Employee</Link>}
          {token && <button onClick={handleLogout}>Logout</button>}
          {token && <h2>{username}</h2>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar