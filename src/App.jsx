import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Landing from "./components/Landing/Landing"
import Dashboard from "./components/Dashboard/Dashboard"
import SignupForm from "./components/SignupForm/SignupForm" // import the SignupForm
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        {user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
      </Routes>
      <h1>Hello world!</h1>
    </>
  )
}

export default App
