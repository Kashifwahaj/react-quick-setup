import React from 'react'
import { Link } from "react-router-dom"

function index() {
    return (
        <div>
            Home Page
            <Link to="/login">Login</Link>
        </div>
    )
}

export default index
