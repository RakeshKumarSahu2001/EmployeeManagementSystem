import React from 'react'

function Dashboard() {
    const role=localStorage.getItem("username")
  return (
    <div className='flex justify-center items-center w-[90vh]'>
        <h3>Welcome {role}</h3>
    </div>
  )
}

export default Dashboard