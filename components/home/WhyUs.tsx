"use client"

import { useState } from "react"
import SectionHeader from "./SectionHeader"
import NeonBtn from "./NeonBtn"
import { T } from "./GlobalStyle"

const FEATURES = [
 {
  icon:"🧵",
  title:"Premium Cotton",
  desc:"Single & double yarn woven fabrics sourced from certified mills — soft, breathable, and built to last."
 },
 {
  icon:"💨",
  title:"Breathable Fabric",
  desc:"Open-weave construction promotes airflow so you stay cool even in peak summer heat."
 },
 {
  icon:"♾️",
  title:"Long Lasting Quality",
  desc:"Colorfastness rated to 50+ washes. Structure intact through wear after wear."
 },
 {
  icon:"🎨",
  title:"Modern Streetwear",
  desc:"Designs born from street culture — oversized cuts, bold silhouettes, minimal graphics."
 }
]

function FeatureCard({ f }: any){

 const [hover,setHover] = useState(false)

 return(

  <div
   onMouseEnter={()=>setHover(true)}
   onMouseLeave={()=>setHover(false)}
   style={{
    background: hover ? "rgba(0,200,255,0.03)" : "rgba(3,18,35,0.8)",
    border: hover ? "1px solid rgba(0,200,255,0.4)" : "1px solid rgba(0,200,255,0.2)",
    padding:"2.5rem",
    display:"flex",
    gap:"1.5rem",
    alignItems:"flex-start",
    transition:"all 0.3s",
    transform: hover ? "translateX(4px)" : "none"
   }}
  >

   <div
    style={{
     width:52,
     height:52,
     border:"1px solid rgba(0,200,255,0.3)",
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     fontSize:"1.4rem"
    }}
   >
    {f.icon}
   </div>

   <div>

    <div
     style={{
      fontFamily:T.fontUI,
      fontSize:"1.15rem",
      fontWeight:700,
      letterSpacing:"0.06em",
      textTransform:"uppercase",
      marginBottom:"0.4rem",
      color:"#fff"
     }}
    >
     {f.title}
    </div>

    <div
     style={{
      fontSize:"0.83rem",
      color:T.textMuted,
      lineHeight:1.65
     }}
    >
     {f.desc}
    </div>

   </div>

  </div>

 )
}

export default function WhyUs(){

 return(

  <div
   style={{
    background:"#020810",
    borderTop:"1px solid rgba(0,200,255,0.06)"
   }}
  >

   <div
    style={{
     maxWidth:1200,
     margin:"0 auto",
     padding:"6rem 2rem"
    }}
   >

    <SectionHeader
     eyebrow="Our Promise"
     title="Why Choose"
     accent="Go-On Tees"
    />

    <div
     style={{
      display:"grid",
      gridTemplateColumns:"repeat(2,1fr)",
      gap:"1.5rem"
     }}
    >

     {FEATURES.map(f=>(
      <FeatureCard key={f.title} f={f}/>
     ))}

    </div>

    <div
     style={{
      marginTop:"4rem",
      border:"1px solid rgba(0,200,255,0.2)",
      padding:"3rem",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      background:"rgba(0,200,255,0.02)"
     }}
    >

     <div>

      <div
       style={{
        fontFamily:T.fontDisplay,
        fontSize:"2rem",
        color:"#fff"
       }}
      >
       Ready to find your perfect tee?
      </div>

      <div
       style={{
        fontSize:"0.85rem",
        color:T.textMuted,
        marginTop:"0.3rem"
       }}
      >
       Free shipping above ₹999 · Easy returns · Custom bulk orders
      </div>

     </div>

     <NeonBtn href="/shop" primary>
      Browse Collection →
     </NeonBtn>

    </div>

   </div>

  </div>

 )
}