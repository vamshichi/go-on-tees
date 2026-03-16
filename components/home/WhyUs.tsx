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
    padding:"1.8rem",
    display:"flex",
    gap:"1rem",
    alignItems:"flex-start",
    transition:"all 0.3s",
    transform: hover ? "translateX(4px)" : "none"
   }}
  >

   <div
    style={{
     minWidth:46,
     height:46,
     border:"1px solid rgba(0,200,255,0.3)",
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     fontSize:"1.2rem"
    }}
   >
    {f.icon}
   </div>

   <div>

    <div
     style={{
      fontFamily:T.fontUI,
      fontSize:"1rem",
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
      fontSize:"0.82rem",
      color:T.textMuted,
      lineHeight:1.6
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

  <section
   style={{
    background:"#020810",
    borderTop:"1px solid rgba(0,200,255,0.06)"
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
     eyebrow="Our Promise"
     title="Why Choose"
     accent="Go-On Tees"
    />

    {/* FEATURES GRID */}

    <div
     className="why-grid"
     style={{
      display:"grid",
      gap:"1.2rem"
     }}
    >

     {FEATURES.map(f=>(
      <FeatureCard key={f.title} f={f}/>
     ))}

    </div>

    {/* CTA */}

    <div
     className="why-cta"
     style={{
      marginTop:"3rem",
      border:"1px solid rgba(0,200,255,0.2)",
      padding:"2rem",
      display:"flex",
      gap:"1.5rem",
      alignItems:"center",
      justifyContent:"space-between",
      background:"rgba(0,200,255,0.02)",
      flexWrap:"wrap"
     }}
    >

     <div style={{maxWidth:500}}>

      <div
       style={{
        fontFamily:T.fontDisplay,
        fontSize:"1.7rem",
        color:"#fff"
       }}
      >
       Ready to find your perfect tee?
      </div>

      <div
       style={{
        fontSize:"0.85rem",
        color:T.textMuted,
        marginTop:"0.4rem"
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

  </section>

 )
}