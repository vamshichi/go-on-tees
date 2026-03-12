import { T } from "./GlobalStyle"

export default function SectionHeader({ eyebrow, title, accent }: any) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <p
        style={{
          fontFamily: T.fontUI,
          fontSize: "0.75rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: T.neon,
          marginBottom: "0.6rem",
        }}
      >
        {eyebrow}
      </p>

      <h2
        style={{
          fontFamily: T.fontDisplay,
          fontSize: "clamp(2.2rem,5vw,3.5rem)",
          letterSpacing: "0.04em",
          color:"#fff"
        }}
      >
        {title}{" "}
        <span
          style={{
            color: T.neon,
            textShadow: "0 0 20px rgba(0,200,255,0.5)",
          }}
        >
          {accent}
        </span>
      </h2>
    </div>
  )
}