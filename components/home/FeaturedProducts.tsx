"use client"

import { useState } from "react"
import SectionHeader from "./SectionHeader"
import { T } from "./GlobalStyle"

const PRODUCTS = [
 { id:1, name:"Essential Crew Tee", gsm:"180 GSM", price:"₹599", old:"₹799", badge:"NEW", emoji:"👕" },
 { id:2, name:"Heavyweight Drop Shoulder", gsm:"260 GSM", price:"₹899", old:"₹1099", badge:"HOT", emoji:"🧥" },
 { id:3, name:"Classic Fit Women", gsm:"200 GSM", price:"₹649", old:"₹849", badge:null, emoji:"👚" },
 { id:4, name:"Streetwear Oversized", gsm:"300 GSM", price:"₹1099", old:"₹1399", badge:"BEST", emoji:"🫧" },
]

function ProductCard({ product, wished, onWish }: any) {

 const [hover, setHover] = useState(false)

 return (

  <div
   onMouseEnter={() => setHover(true)}
   onMouseLeave={() => setHover(false)}
   style={{
    background: T.bgCard,
    border: "1px solid rgba(0,200,255,0.2)",
    position: "relative",
    transition: "all 0.35s",
    transform: hover ? "translateY(-4px)" : "none"
   }}
  >

   <div
    style={{
     width: "100%",
     aspectRatio: "1",
     display: "flex",
     alignItems: "center",
     justifyContent: "center"
    }}
   >

    <span
     style={{
      fontSize: "3.5rem",
      filter: "drop-shadow(0 0 20px rgba(0,200,255,0.6))"
     }}
    >
     {product.emoji}
    </span>

   </div>

   <div style={{ padding: "1.2rem" }}>

    <div
     style={{
      fontSize: "0.65rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: T.neon
     }}
    >
     {product.gsm}
    </div>

    <div
     style={{
      fontFamily: T.fontUI,
      fontWeight: 700,
      color: "white",
      marginBottom: "0.8rem"
     }}
    >
     {product.name}
    </div>

    <div
     style={{
      display: "flex",
      justifyContent: "space-between"
     }}
    >

     <span
      style={{
       fontFamily: T.fontDisplay,
       fontSize: "1.4rem",
       color: T.neon
      }}
     >
      {product.price}
     </span>

     <button
      style={{
       border: "1px solid rgba(0,200,255,0.3)",
       color: T.neon,
       fontSize: "0.7rem",
       padding: "0.4rem 0.9rem",
       cursor: "pointer"
      }}
     >
      Add +
     </button>

    </div>

   </div>

  </div>

 )
}

export default function FeaturedProducts() {

 const [wished, setWished] = useState({})

 return (

  <div style={{ background: T.bgDark }}>

   <div
    style={{
     maxWidth: 1200,
     margin: "0 auto",
     padding: "6rem 2rem"
    }}
   >

    <SectionHeader
     eyebrow="Handpicked"
     title="Featured"
     accent="Products"
    />

    <div
     style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "1.2rem"
     }}
    >

     {PRODUCTS.map(p => (

      <ProductCard
       key={p.id}
       product={p}
    //    wished={!!wished[p.id]}
       onWish={() =>
        setWished((w:any) => ({ ...w, [p.id]: !w[p.id] }))
       }
      />

     ))}

    </div>

   </div>

  </div>

 )
}