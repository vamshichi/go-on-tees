"use client"

import NeonBtn from "./NeonBtn"
import { T } from "./GlobalStyle"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {

 return (

  <section
   style={{
    minHeight: "100vh",
    background: T.bgDark,
    padding: "4rem 1.5rem"
   }}
  >

   <div
    style={{
     maxWidth: 1200,
     margin: "0 auto",
     display: "grid",
     gridTemplateColumns: "1fr",
     gap: "3rem",
     alignItems: "center"
    }}
    className="hero-grid"
   >

    {/* LEFT */}

    <motion.div
     initial={{ opacity: 0, x: -80 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }}
    >

     <div
      style={{
       fontFamily: T.fontUI,
       fontSize: "0.75rem",
       letterSpacing: "0.35em",
       textTransform: "uppercase",
       color: T.neon,
       marginBottom: "1rem",
       display: "flex",
       alignItems: "center",
       gap: "0.8rem"
      }}
     >
      <span
       style={{
        width: 40,
        height: 1,
        background: T.neon
       }}
      />
      You Think — We Create
     </div>

     <h1
      style={{
       fontFamily: T.fontDisplay,
       fontSize: "clamp(2.5rem,7vw,6rem)",
       lineHeight: 1,
       color: "#fff"
      }}
     >
      <span style={{ display: "block" }}>Premium</span>

      <span
       style={{
        display: "block",
        color: T.neon,
        textShadow: `0 0 10px ${T.neon}`
       }}
      >
       GSM
      </span>

      <span style={{ display: "block" }}>
       T-Shirts
      </span>
     </h1>

     <p
      style={{
       marginTop: "1.5rem",
       fontSize: "0.95rem",
       color: T.textMuted,
       lineHeight: 1.7,
       maxWidth: 420
      }}
     >
      From 140 to 300 GSM — each weight engineered for a purpose.
      High-quality cotton crafted for streetwear, comfort, and enduring style.
     </p>

     <div
      style={{
       marginTop: "2rem",
       display: "flex",
       gap: "1rem",
       flexWrap: "wrap"
      }}
     >
      <NeonBtn href="/shop" primary>
       Shop Now
      </NeonBtn>

      <NeonBtn href="/guide">
       GSM Guide →
      </NeonBtn>
     </div>

    </motion.div>


    {/* RIGHT IMAGE */}

    <div
     style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
     }}
    >

     <div
      className="hero-ring"
      style={{
       width: "280px",
       height: "280px",
       borderRadius: "50%",
       border: "1.5px solid rgba(0,200,255,0.35)",
       boxShadow: "0 0 30px rgba(0,200,255,0.2)",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       position: "relative"
      }}
     >

      <Image
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVI9IuGSnG9OiR3oFOuSuKw-Pq7Qjm97NNYy5wABwew&s"
       width={260}
       height={260}
       alt="tshirt"
       style={{
        borderRadius: "12px",
        objectFit: "cover"
       }}
      />

      {/* Stats */}

      <div
       style={{
        position: "absolute",
        bottom: "-1.3rem",
        background: "rgba(1,15,30,0.9)",
        padding: "0.8rem 1.5rem",
        border: T.border,
        display: "flex",
        gap: "1.5rem",
        backdropFilter: "blur(10px)"
       }}
      >

       {[
        ["140+", "GSM"],
        ["4K+", "Orders"],
        ["100%", "Cotton"]
       ].map(([n, l]) => (

        <div key={l} style={{ textAlign: "center" }}>

         <span
          style={{
           display: "block",
           fontFamily: T.fontDisplay,
           color: T.neon,
           fontSize: "1.2rem"
          }}
         >
          {n}
         </span>

         <span
          style={{
           fontSize: "0.6rem",
           color: T.textMuted
          }}
         >
          {l}
         </span>

        </div>

       ))}

      </div>

     </div>

    </div>

   </div>

  </section>

 )
}