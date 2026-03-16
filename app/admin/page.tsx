"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { T } from "@/components/home/GlobalStyle"

export default function AdminPage(){

 const router = useRouter()

 useEffect(()=>{

  const admin = localStorage.getItem("admin")

  if(!admin){
   router.push("/admin-login")
  }

 },[])

 const cards = [
  { name:"Products", url:"/admin/products", icon:"📦", desc:"Manage all store products" },
  { name:"Orders", url:"/admin/orders", icon:"🧾", desc:"Track customer orders" },
  { name:"Users", url:"/admin/users", icon:"👤", desc:"View registered users" }
 ]

 return(

  <div
   style={{
    minHeight:"100vh",
    background:T.bgDark,
    padding:"3rem 1.5rem"
   }}
  >

   <div style={{maxWidth:1100,margin:"0 auto"}}>

    <h1
     style={{
      fontFamily:T.fontDisplay,
      fontSize:"2.5rem",
      color:T.neon,
      marginBottom:"2rem"
     }}
    >
     Admin Dashboard
    </h1>

    <div className="admin-grid">

     {cards.map(card =>(

      <Link
       key={card.name}
       href={card.url}
       className="admin-card"
      >

       <div className="admin-icon">
        {card.icon}
       </div>

       <h2 className="admin-title">
        {card.name}
       </h2>

       <p className="admin-desc">
        {card.desc}
       </p>

      </Link>

     ))}

    </div>

   </div>

  </div>

 )
}