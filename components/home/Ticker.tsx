"use client"

import { T } from "./GlobalStyle"

export default function Ticker() {

 const items = [
  "Premium Cotton",
  "You Think We Create",
  "140–300 GSM",
  "Streetwear Ready",
  "Fast Delivery",
  "Custom Prints",
  "Go-On Tees"
 ]

 const doubled = [...items, ...items]

 return (

  <div
   style={{
    background: T.neon,
    padding: "0.65rem 0",
    overflow: "hidden"
   }}
  >

   <div
    style={{
     display: "flex",
     animation: "ticker 25s linear infinite",
     whiteSpace: "nowrap"
    }}
   >

    {doubled.map((item, i) => (

     <div
      key={i}
      style={{
       display: "flex",
       alignItems: "center",
       gap: "1.5rem",
       padding: "0 2rem",
       fontFamily: T.fontUI,
       fontSize: "0.85rem",
       fontWeight: 700,
       letterSpacing: "0.15em",
       textTransform: "uppercase",
       color: "#000",
       flexShrink: 0
      }}
     >

      {item}

      <div
       style={{
        width: 4,
        height: 4,
        background: "rgba(0,0,0,0.4)",
        borderRadius: "50%"
       }}
      />

     </div>

    ))}

   </div>

  </div>

 )
}