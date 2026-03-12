"use client"

import { useState } from "react"
import SectionHeader from "./SectionHeader"
import { T } from "./GlobalStyle"

const CATEGORIES = [
 { name: "Men T-Shirts", icon: "👕", url: "/shop?category=men" },
 { name: "Women T-Shirts", icon: "👚", url: "/shop?category=women" },
 { name: "Men Oversized", icon: "🧥", url: "/shop?category=men-oversized" },
 { name: "Women Oversized", icon: "🫧", url: "/shop?category=women-oversized" }
]

function CatCard({ cat, last }: any) {

 const [hover, setHover] = useState(false)

 return (

  <a
   href={cat.url}
   onMouseEnter={() => setHover(true)}
   onMouseLeave={() => setHover(false)}
   style={{
    background: hover ? "rgba(0,200,255,0.04)" : T.bgCard,
    padding: "2.5rem 1.5rem",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    borderRight: last ? "none" : "1px solid rgba(0,200,255,0.2)",
    position: "relative"
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
     letterSpacing: "0.1em",
     textTransform: "uppercase",
     color: hover ? T.neon : "rgba(255,255,255,0.75)"
    }}
   >
    {cat.name}
   </div>

  </a>

 )
}

export default function Categories() {

 return (

  <div
   style={{
    background: "rgba(2,12,22,0.8)",
    borderTop: "1px solid rgba(0,200,255,0.06)",
    borderBottom: "1px solid rgba(0,200,255,0.06)"
   }}
  >

   <div
    style={{
     maxWidth: 1200,
     margin: "0 auto",
     padding: "6rem 2rem"
    }}
   >

    <SectionHeader
     eyebrow="Collections"
     title="Shop by"
     accent="Category"
    />

    <div
     style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      border: "1px solid rgba(0,200,255,0.2)"
     }}
    >

     {CATEGORIES.map((c, i) => (
      <CatCard
       key={c.name}
       cat={c}
       last={i === CATEGORIES.length - 1}
      />
     ))}

    </div>

   </div>

  </div>

 )
}