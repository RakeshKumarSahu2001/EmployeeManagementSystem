import React, { Children } from 'react'

function RoleRoute({ children }) {
    const role = localStorage.getItem("role")

    return role==="admin" ? children : <div>
        <h1>You cant access this route.</h1>
    </div>
}

    export default RoleRoute