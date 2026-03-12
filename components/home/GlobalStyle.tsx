export const T = {
  neon: "#00c8ff",
  neonGlow: "rgba(0,200,255,0.4)",
  bgDark: "#010a12",
  bgCard: "#020d18",
  border: "1px solid rgba(0,200,255,0.2)",
  textMuted: "rgba(180,220,255,0.55)",
  fontDisplay: "'Bebas Neue', sans-serif",
  fontUI: "'Rajdhani', sans-serif",
  fontBody: "'Inter', sans-serif",
}

export default function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Bebas+Neue&family=Inter:wght@300;400;500&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: ${T.bgDark}; color: #fff; font-family: ${T.fontBody}; overflow-x: hidden; }
      @keyframes slowSpin   { to { transform: rotate(360deg);  } }
      @keyframes counterSpin{ to { transform: rotate(-360deg); } }
      @keyframes ticker     { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    `}</style>
  )
}