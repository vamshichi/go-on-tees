"use client"

import { useState } from "react"
import SectionHeader from "./SectionHeader"
import { T } from "./GlobalStyle"

const CATEGORIES = [
 { name: "Men T-Shirts", icon: "", url: "/shop?category=men" },
 { name: "Women T-Shirts", icon: "", url: "/shop?category=women" },
 { name: "Men Oversized", icon: "", url: "/shop?category=men-oversized" },
 { name: "Women Oversized", icon: "", url: "/shop?category=women-oversized" }
]

function CatCard({ cat }: any) {

 const [hover,setHover] = useState(false)

 return (

  <a
   href={cat.url}
   onMouseEnter={()=>setHover(true)}
   onMouseLeave={()=>setHover(false)}
   style={{
    background: hover ? "rgba(0,200,255,0.04)" : T.bgCard,
    padding: "2rem 1rem",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    border: "1px solid rgba(0,200,255,0.2)",
    transition: "all 0.25s"
   }}
  >

   <div
    style={{
     fontSize: "2rem",
     filter: hover
      ? "drop-shadow(0 0 16px rgba(0,200,255,0.9))"
      : "drop-shadow(0 0 8px rgba(0,200,255,0.5))"
    }}
   >
    {cat.icon}
   </div>

   <div
    style={{
     fontFamily: T.fontUI,
     fontWeight: 700,
     letterSpacing: "0.08em",
     textTransform: "uppercase",
     fontSize: "0.85rem",
     color: hover ? T.neon : "rgba(255,255,255,0.75)",
     textAlign:"center"
    }}
   >
    {cat.name}
   </div>

  </a>

 )
}

export default function Categories() {

 return (

  <section
   style={{
    background:"rgba(2,12,22,0.8)",
    borderTop:"1px solid rgba(0,200,255,0.06)",
    borderBottom:"1px solid rgba(0,200,255,0.06)"
   }}
  >

   <div
    style={{
     maxWidth:1200,
     margin:"0 auto",
     padding:"4rem 1.5rem"
    }}
   >

    <SectionHeader
     eyebrow="Collections"
     title="Shop by"
     accent="Category"
    />

    <div
     className="category-grid"
     style={{
      display:"grid",
      gap:"1rem"
     }}
    >

     {CATEGORIES.map((c)=>(
      <CatCard key={c.name} cat={c}/>
     ))}

    </div>

   </div>

  </section>

 )
}