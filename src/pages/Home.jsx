import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import Dashboard from "./Dashboard"

function Home(props){
  const { currentUser, loading:userLoading} = useContext(AuthContext)
  const nav = useNavigate()

  useEffect(()=>{
    if(!currentUser && !userLoading){
      nav('/login')
    }
  })
  return <Dashboard />
}

export default Home