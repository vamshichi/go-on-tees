"use client"

import { useState } from "react"
import SectionHeader from "./SectionHeader"
import { T } from "./GlobalStyle"

const GSM_DATA = [
 { num:"01", range:"140–160 GSM", label:"Featherlight", desc:"Ultra-breathable everyday shirts. Perfect for summer & layering.", fill:30 },
 { num:"02", range:"180–200 GSM", label:"Balanced", desc:"The sweet spot — structured shape with all-day comfort.", fill:55 },
 { num:"03", range:"220–240 GSM", label:"Premium Heavy", desc:"Substantial hand feel. Drapes beautifully, holds its shape.", fill:75 },
 { num:"04", range:"260–300 GSM", label:"Streetwear", desc:"Maximum weight. Oversized silhouettes made for bold statements.", fill:100 },
]

function GSMCard({ item, last }: any) {

 const [hover,setHover] = useState(false)

 return(

  <div
   onMouseEnter={()=>setHover(true)}
   onMouseLeave={()=>setHover(false)}
   style={{
    padding:"3rem 2rem",
    borderTop: hover ? `2px solid ${T.neon}` : "2px solid transparent",
    borderBottom:"1px solid rgba(0,200,255,0.2)",
    borderLeft:"1px solid rgba(0,200,255,0.2)",
    borderRight: last ? "1px solid rgba(0,200,255,0.2)" : "none",
    background: hover ? "rgba(0,200,255,0.03)" : "transparent",
    transition:"all 0.35s"
   }}
  >

   <div
    style={{
     fontFamily:T.fontDisplay,
     fontSize:"3rem",
     color: hover ? "rgba(0,200,255,0.4)" : "rgba(0,200,255,0.12)",
     marginBottom:"1rem"
    }}
   >
    {item.num}
   </div>

   <div
    style={{
     fontFamily:T.fontUI,
     fontSize:"1.1rem",
     fontWeight:700,
     color:T.neon,
     letterSpacing:"0.06em",
     marginBottom:"0.5rem"
    }}
   >
    {item.range}
   </div>

   <div
    style={{
     fontFamily:T.fontDisplay,
     fontSize:"1.3rem",
     letterSpacing:"0.06em",
     marginBottom:"0.6rem",
     color:"#fff"
    }}
   >
    {item.label}
   </div>

   <div
    style={{
     fontSize:"0.82rem",
     color:T.textMuted,
     lineHeight:1.6
    }}
   >
    {item.desc}
   </div>

   <div
    style={{
     marginTop:"1.5rem",
     height:2,
     background:"rgba(0,200,255,0.12)",
     position:"relative"
    }}
   >

    <div
     style={{
      position:"absolute",
      left:0,
      top:0,
      bottom:0,
      width:`${item.fill}%`,
      background:T.neon,
      boxShadow:`0 0 8px ${T.neon}`
     }}
    />

   </div>

  </div>

 )
}

export default function GSMGuide(){

 return(

  <div
   style={{
    background:`linear-gradient(180deg,${T.bgDark} 0%,rgba(2,12,22,0.8) 50%,${T.bgDark} 100%)`
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
     eyebrow="Weight Guide"
     title="Find Your"
     accent="GSM"
    />

    <div
     style={{
      display:"grid",
      gridTemplateColumns:"repeat(4,1fr)"
     }}
    >

     {GSM_DATA.map((item,i)=>(
      <GSMCard
       key={item.num}
       item={item}
       last={i === GSM_DATA.length-1}
      />
     ))}

    </div>

   </div>

  </div>

 )
}