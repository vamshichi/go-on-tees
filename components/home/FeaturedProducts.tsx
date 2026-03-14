"use client"

import { useEffect, useState } from "react"
import SectionHeader from "./SectionHeader"
import { T } from "./GlobalStyle"

function ProductCard({ product }: any) {

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

   <img
    src={product.image}
    style={{
     width: "100%",
     aspectRatio: "1",
     objectFit: "cover"
    }}
   />

   <div style={{ padding: "1.2rem" }}>

    <div
     style={{
      fontSize: "0.65rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: T.neon
     }}
    >
     {product.gsm} GSM
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

    <div style={{ display: "flex", justifyContent: "space-between" }}>

     <span
      style={{
       fontFamily: T.fontDisplay,
       fontSize: "1.4rem",
       color: T.neon
      }}
     >
      ₹{product.price}
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

 const [products,setProducts] = useState([])

 useEffect(()=>{

  fetch("/api/products")
  .then(res=>res.json())
  .then(data=>setProducts(data))

 },[])

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

     {products.map((p:any)=>(

      <ProductCard
       key={p.id}
       product={p}
      />

     ))}

    </div>

   </div>

  </div>

 )
}