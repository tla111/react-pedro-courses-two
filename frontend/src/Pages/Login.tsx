import { useState } from "react"

export const Login = () => {
    const [newUsername, setNewUsername] = useState("")
    return (
        <h1>
            THIS IS THE LOGIN PAGE
            <input onChange={(e) => { setNewUsername(e.target.value) }} />
            <button>Submit Login</button>
            <button>Logout</button>
        </h1>
    )
}