"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { T } from "@/components/home/GlobalStyle"

export default function LoginPage() {

 const router = useRouter()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [loading,setLoading] = useState(false)

 async function handleLogin(e:any){
  e.preventDefault()
  setLoading(true)

  const res = await signIn("credentials",{
   email,
   password,
   redirect:false
  })

  setLoading(false)

  if(res?.ok){
   router.push("/")
  }else{
   alert("Invalid login credentials")
  }
 }

 return (

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
     background:T.bgCard,
     border:"1px solid rgba(0,200,255,0.2)",
     padding:"2.5rem",
     borderRadius:"8px",
     boxShadow:"0 0 30px rgba(0,200,255,0.08)"
    }}
   >

    <h1
     style={{
      textAlign:"center",
      marginBottom:"2rem",
      color:T.neon,
      fontFamily:T.fontDisplay,
      letterSpacing:"0.05em"
     }}
    >
     Login
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
      placeholder="Email address"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required
      style={inputStyle}
     />

     <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required
      style={inputStyle}
     />

     <button
      type="submit"
      style={{
       marginTop:"1rem",
       padding:"0.8rem",
       border:"1px solid rgba(0,200,255,0.4)",
       background:"transparent",
       color:T.neon,
       cursor:"pointer",
       letterSpacing:"0.1em",
       fontFamily:T.fontUI
      }}
     >
      {loading ? "Signing in..." : "Sign In"}
     </button>

    </form>

    <p
     style={{
      marginTop:"1.5rem",
      textAlign:"center",
      color:"rgba(255,255,255,0.6)",
      fontSize:"0.9rem"
     }}
    >
     Don't have an account?{" "}
     <Link
      href="/register"
      style={{
       color:T.neon,
       textDecoration:"none"
      }}
     >
      Register
     </Link>
    </p>

   </div>

  </div>

 )
}

const inputStyle = {
 width:"100%",
 padding:"0.8rem",
 background:"transparent",
 border:"1px solid rgba(255,255,255,0.2)",
 color:"white",
 outline:"none"
}