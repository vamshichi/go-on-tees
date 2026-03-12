"use client"

import { useState } from "react"
import { T } from "./GlobalStyle"

export default function NeonBtn({ href, children, primary, onClick }: any) {
  const [h, set] = useState(false)

  const base = {
    fontFamily: T.fontUI,
    fontSize: "0.95rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "0.85rem 2.2rem",
    cursor: "pointer",
    clipPath: "polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)",
    transition: "all 0.25s",
    textDecoration: "none",
    display: "inline-block",
    border: "none",
  }

  const themed = primary
    ? {
        background: h ? T.neon : "transparent",
        color: h ? "#000" : T.neon,
        outline: `1.5px solid ${T.neon}`,
      }
    : {
        background: "transparent",
        color: "rgba(255,255,255,0.6)",
        outline: "1.5px solid rgba(255,255,255,0.15)",
      }

  return href ? (
    <a
      href={href}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      style={{ ...base, ...themed }}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      style={{ ...base, ...themed }}
    >
      {children}
    </button>
  )
}