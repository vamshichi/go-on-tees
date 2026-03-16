"use client"

import NeonBtn from "./NeonBtn"
import { T } from "./GlobalStyle"
import { motion } from "framer-motion"

export default function Hero() {

  return (

    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",   // ✅ center horizontally
        padding: "4rem 1.5rem",
        overflow: "hidden"
      }}
    >

      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("/bgimage.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.35)",
          zIndex: 0
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            to bottom,
            rgba(1,10,18,0.3) 0%,
            rgba(1,10,18,0.5) 50%,
            rgba(1,10,18,0.95) 100%
          )`,
          zIndex: 1
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          justifyContent: "center"   // ✅ center the motion div
        }}
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: 600,
            width: "100%",
            textAlign: "center",     // ✅ center all text
            display: "flex",
            flexDirection: "column",
            alignItems: "center"     // ✅ center flex children (buttons, stats, eyebrow)
          }}
        >

          {/* Eyebrow */}
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
            <span style={{ width: 40, height: 1, background: T.neon }} />
            You Think — We Create
            <span style={{ width: 40, height: 1, background: T.neon }} />
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: T.fontDisplay,
              fontSize: "clamp(2.5rem, 10vw, 6rem)",
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

            <span style={{ display: "block" }}>T-Shirts</span>
          </h1>

          {/* Description */}
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

          {/* Buttons */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center"   // ✅ center buttons
            }}
          >
            <NeonBtn href="/shop" primary>Shop Now</NeonBtn>
            <NeonBtn href="/guide">GSM Guide →</NeonBtn>
          </div>

          {/* Stats */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              justifyContent: "center"   // ✅ center stats
            }}
          >
            {[
              ["140+", "GSM Options"],
              ["4K+", "Orders"],
              ["100%", "Cotton"]
            ].map(([n, l]) => (

              <div key={l} style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: T.fontDisplay,
                    color: T.neon,
                    fontSize: "1.6rem",
                    textShadow: `0 0 8px ${T.neon}`
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: T.textMuted,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase"
                  }}
                >
                  {l}
                </span>
              </div>

            ))}
          </div>

        </motion.div>

      </div>

    </section>

  )
}