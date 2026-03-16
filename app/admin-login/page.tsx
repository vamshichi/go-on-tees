"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { T } from "@/components/home/GlobalStyle"

export default function AdminLogin(){

 const router = useRouter()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [error,setError] = useState("")

 function handleLogin(e:any){

  e.preventDefault()

  if(email === "admin@gmail.com" && password === "admin123"){

   localStorage.setItem("admin","true")

   router.push("/admin")

  }else{

   setError("Invalid credentials")

  }

 }

 return(

  <div
   style={{
    minHeight:"100vh",
    background:T.bgDark,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"2rem"
   }}
  >

   <div
    style={{
     width:"100%",
     maxWidth:420,
     background:"rgba(3,18,35,0.9)",
     border:"1px solid rgba(0,200,255,0.2)",
     padding:"2.5rem"
    }}
   >

    <h1
     style={{
      color:T.neon,
      fontFamily:T.fontDisplay,
      fontSize:"2rem",
      marginBottom:"1.5rem",
      textAlign:"center"
     }}
    >
     Admin Login
    </h1>

    <form
     onSubmit={handleLogin}
     style={{
      display:"flex",
      flexDirection:"column",
      gap:"1rem"
     }}
    >

     <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      style={inputStyle}
     />

     <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      style={inputStyle}
     />

     {error && (
      <p style={{color:"red",fontSize:"0.9rem"}}>
       {error}
      </p>
     )}

     <button style={buttonStyle}>
      Login
     </button>

    </form>

   </div>

  </div>

 )
}

const inputStyle = {
 padding:"0.8rem",
 background:"transparent",
 border:"1px solid rgba(255,255,255,0.2)",
 color:"white"
}

const buttonStyle = {
 padding:"0.8rem",
 background:"transparent",
 border:"1px solid rgba(0,200,255,0.4)",
 color:"#00c8ff",
 cursor:"pointer"
}