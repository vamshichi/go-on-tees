"use client"

import NeonBtn from "./NeonBtn"
import { T } from "./GlobalStyle"
import Image from "next/image"
import { motion } from "framer-motion"
// ─── HERO ─────────────────────────────────────────────────────────────────────
export default function Hero() {
    return (
        <section style={{ minHeight: "100vh", background: T.bgDark }}>
            <div className="py-10 ">
                <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", position: "relative", zIndex: 1 }}>

                    {/* LEFT */}
                    <motion.div
 initial={{ opacity: 0, x: -80 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
>
                        <div style={{ fontFamily: T.fontUI, fontSize: "0.8rem", letterSpacing: "0.35em", textTransform: "uppercase", color: T.neon, marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
                            <span style={{ display: "inline-block", width: 40, height: 1, background: T.neon, boxShadow: `0 0 8px ${T.neon}` }} />
                            You Think — We Create
                        </div>

                        <h1 style={{ fontFamily: T.fontDisplay, fontSize: "clamp(3.5rem,8vw,6.5rem)", lineHeight: 0.95, letterSpacing: "0.02em", color: "#fff" }}>
                            <span style={{ display: "block" }}>Premium</span>
                            <span style={{ display: "block", color: T.neon, textShadow: `0 0 10px ${T.neon},0 0 30px ${T.neonGlow},0 0 60px rgba(0,200,255,0.3)` }}>GSM</span>
                            <span style={{ display: "block" }}>T-Shirts</span>
                        </h1>

                        <p style={{ marginTop: "1.8rem", fontSize: "1rem", color: T.textMuted, lineHeight: 1.7, fontWeight: 300, maxWidth: 380 }}>
                            From 140 to 300 GSM — each weight engineered for a purpose. High-quality cotton crafted for streetwear, comfort, and enduring style.
                        </p>

                        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <NeonBtn href="/shop" primary>Shop Now</NeonBtn>
                            <NeonBtn href="/guide">GSM Guide →</NeonBtn>
                        </div>
                    </motion.div>

                    {/* RIGHT — spinning ring */}
                    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{
                            width: 360, height: 360, borderRadius: "50%",
                            border: "1.5px solid rgba(0,200,255,0.35)",
                            boxShadow: "0 0 30px rgba(0,200,255,0.2),inset 0 0 30px rgba(0,200,255,0.05)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            position: "relative", animation: "slowSpin 18s linear infinite",
                        }}>
                            {/* <div style={{ position: "absolute", top: -5, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: T.neon, boxShadow: `0 0 15px ${T.neon},0 0 30px ${T.neon}` }} /> */}
                            <div style={{ position: "absolute", fontSize: "5rem", animation: "counterSpin 18s linear infinite", filter: "drop-shadow(0 0 20px rgba(0,200,255,0.8))" }}>

                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVI9IuGSnG9OiR3oFOuSuKw-Pq7Qjm97NNYy5wABwew&s"
                                    width={400}
                                    height={300}
                                    alt="Example Image"
                                />
                            </div>
                            <div style={{
                                position: "absolute", bottom: "-1.5rem", left: "50%", transform: "translateX(-50%)",
                                display: "flex", gap: "2rem", background: "rgba(1,15,30,0.9)", border: T.border,
                                padding: "1rem 2rem", whiteSpace: "nowrap",
                                animation: "counterSpin 18s linear infinite", backdropFilter: "blur(10px)",
                            }}>
                                {[["140+", "GSM Range"], ["4K+", "Orders"], ["100%", "Cotton"]].map(([n, l]) => (
                                    <div key={l} style={{ textAlign: "center" }}>
                                        <span style={{ fontFamily: T.fontDisplay, fontSize: "1.5rem", color: T.neon, display: "block" }}>{n}</span>
                                        <span style={{ fontSize: "0.62rem", color: T.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}