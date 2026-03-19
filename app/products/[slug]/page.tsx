// app/products/[slug]/page.tsx  — SERVER COMPONENT (no "use client")
import { prisma } from "@/lib/prisma"
import Image from "next/image"
import { notFound } from "next/navigation"
import ProductControls from "./ProductControls"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = await prisma.product.findUnique({
    where: { slug },
  })

  if (!product) notFound()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@200;300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --void:    #0b0c0e;
          --surface: #111316;
          --raised:  #181b1f;
          --edge:    #242830;
          --gold:    #c9a55a;
          --gold-hi: #e8c87a;
          --gold-lo: rgba(201,165,90,0.15);
          --ash:     #6b7280;
          --smoke:   #9ca3af;
          --snow:    #f1f0ee;
          --danger:  #e05252;
        }

        .pr {
          min-height: 100vh;
          background: var(--void);
          color: var(--snow);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .pr::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 999;
        }

        .pr-wrap {
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: 100vh;
        }

        .pr-img-col {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          background: #0d0f12;
        }

        .pr-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.88;
          filter: contrast(1.08) saturate(0.75);
          transition: transform 10s cubic-bezier(0.25,0.1,0.25,1), opacity 0.6s ease;
          transform-origin: center;
        }

        .pr-img-col:hover img { transform: scale(1.06); opacity: 0.95; }

        .pr-img-col::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right,  transparent 60%, var(--void) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%),
            linear-gradient(to top,    rgba(0,0,0,0.6)  0%, transparent 40%);
          z-index: 1;
        }

        .pr-category {
          position: absolute; top: 36px; left: 36px; z-index: 2;
          display: flex; align-items: center; gap: 10px;
          opacity: 0; animation: fadeIn 0.6s ease 0.2s forwards;
        }

        .pr-category-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold); box-shadow: 0 0 8px var(--gold);
        }

        .pr-category-text {
          font-size: 10px; font-weight: 300; letter-spacing: 0.4em;
          text-transform: uppercase; color: var(--gold);
        }

        .pr-gsm {
          position: absolute; bottom: 44px; left: 44px; z-index: 2;
          width: 80px; height: 80px; border-radius: 50%;
          border: 1px solid rgba(201,165,90,0.4);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: rgba(11,12,14,0.7); backdrop-filter: blur(12px);
          box-shadow: 0 0 0 6px rgba(201,165,90,0.05), inset 0 0 20px rgba(201,165,90,0.03);
          opacity: 0; animation: scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.5s forwards;
        }

        .pr-gsm-num {
          font-family: 'Playfair Display', serif; font-size: 20px;
          font-weight: 500; color: var(--gold-hi); line-height: 1;
        }

        .pr-gsm-label {
          font-size: 8px; font-weight: 300; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--ash); margin-top: 2px;
        }

        .pr-vert-brand {
          position: absolute; right: 24px; top: 50%;
          transform: translateY(-50%) rotate(90deg); z-index: 2;
          font-size: 9px; font-weight: 200; letter-spacing: 0.5em;
          text-transform: uppercase; color: rgba(201,165,90,0.35); white-space: nowrap;
        }

        .pr-info-col {
          display: flex; flex-direction: column; justify-content: center;
          padding: 80px 60px 80px 56px; position: relative;
          background: linear-gradient(160deg, var(--surface) 0%, var(--void) 100%);
        }

        .pr-info-col::before {
          content: ''; position: absolute;
          left: 0; top: 15%; bottom: 15%; width: 1px;
          background: linear-gradient(to bottom, transparent, var(--edge), transparent);
        }

        .pr-eyebrow {
          display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
          opacity: 0; animation: fadeUp 0.6s ease 0.15s forwards;
        }

        .pr-eyebrow-rule {
          width: 32px; height: 1px; background: var(--gold); box-shadow: 0 0 6px var(--gold);
        }

        .pr-eyebrow-text {
          font-size: 10px; font-weight: 300; letter-spacing: 0.38em;
          text-transform: uppercase; color: var(--gold);
        }

        .pr-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 3.5vw, 56px);
          font-weight: 400; line-height: 1.08; letter-spacing: -0.015em;
          color: var(--snow); margin-bottom: 6px;
          opacity: 0; animation: fadeUp 0.6s ease 0.25s forwards;
        }

        .pr-name i { font-style: italic; color: var(--gold-hi); }

        .pr-stars {
          display: flex; align-items: center; gap: 6px; margin-bottom: 24px;
          opacity: 0; animation: fadeUp 0.6s ease 0.32s forwards;
        }

        .pr-star { color: var(--gold); font-size: 12px; }

        .pr-star-count {
          font-size: 11px; font-weight: 300; color: var(--ash); letter-spacing: 0.05em;
        }

        .pr-ornament {
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
          opacity: 0; animation: fadeUp 0.6s ease 0.38s forwards;
        }

        .pr-orn-line { flex: 1; height: 1px; background: var(--edge); }

        .pr-orn-diamond {
          width: 5px; height: 5px; background: var(--gold);
          transform: rotate(45deg); box-shadow: 0 0 6px var(--gold);
        }

        .pr-desc {
          font-family: 'Playfair Display', serif; font-size: 15px;
          font-style: italic; font-weight: 400; line-height: 1.85;
          color: var(--smoke); max-width: 460px; margin-bottom: 24px;
          opacity: 0; animation: fadeUp 0.6s ease 0.44s forwards;
        }

        .pr-specs {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: var(--edge);
          border: 1px solid var(--edge); border-radius: 2px;
          overflow: hidden; margin-bottom: 24px;
          opacity: 0; animation: fadeUp 0.6s ease 0.5s forwards;
        }

        .pr-spec {
          background: var(--raised); padding: 16px 14px;
          display: flex; flex-direction: column; gap: 5px;
          transition: background 0.25s ease;
        }

        .pr-spec:hover { background: #1e2228; }

        .pr-spec-label {
          font-size: 8px; font-weight: 300; letter-spacing: 0.35em;
          text-transform: uppercase; color: var(--ash);
        }

        .pr-spec-val {
          font-family: 'Playfair Display', serif; font-size: 18px;
          font-weight: 400; color: var(--snow); line-height: 1;
        }

        .pr-spec-val span {
          font-size: 11px; color: var(--gold);
          font-family: 'DM Sans', sans-serif; font-weight: 300;
          letter-spacing: 0.1em; margin-left: 2px;
        }

        .pr-price-row {
          display: flex; align-items: flex-end; gap: 14px; margin-bottom: 20px;
          opacity: 0; animation: fadeUp 0.6s ease 0.56s forwards;
        }

        .pr-price-block { display: flex; align-items: baseline; gap: 4px; }

        .pr-cur {
          font-family: 'Playfair Display', serif; font-size: 22px;
          font-weight: 400; color: var(--gold); line-height: 1;
        }

        .pr-amount {
          font-family: 'Playfair Display', serif; font-size: 50px;
          font-weight: 500; line-height: 0.9; color: var(--snow); letter-spacing: -0.03em;
        }

        .pr-per {
          font-size: 10px; font-weight: 300; letter-spacing: 0.25em;
          text-transform: uppercase; color: var(--ash); margin-bottom: 4px;
        }

        .pr-trust {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px; opacity: 0; animation: fadeUp 0.6s ease 0.76s forwards;
        }

        .pr-trust-item {
          display: flex; flex-direction: column; align-items: center;
          gap: 6px; padding: 12px 8px;
          border: 1px solid var(--edge); border-radius: 2px;
          background: var(--raised); text-align: center; transition: border-color 0.25s;
        }

        .pr-trust-item:hover { border-color: rgba(201,165,90,0.3); }
        .pr-trust-icon { color: var(--gold); opacity: 0.8; }

        .pr-trust-label {
          font-size: 9px; font-weight: 300; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--ash); line-height: 1.4;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 960px) {
          .pr-wrap { grid-template-columns: 1fr; }
          .pr-img-col { position: relative; height: 60vw; min-height: 280px; }
          .pr-img-col::before {
            background:
              linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%),
              linear-gradient(to top, rgba(11,12,14,0.85) 0%, transparent 50%);
          }
          .pr-info-col { padding: 40px 24px 56px; }
          .pr-info-col::before { display: none; }
          .pr-amount { font-size: 40px; }
        }
      `}</style>

      <div className="pr">
        <div className="pr-wrap">

          {/* IMAGE COLUMN */}
          <div className="pr-img-col">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="40vw"
              style={{ objectFit: "cover" }}
            />
            <div className="pr-category">
              <span className="pr-category-dot" />
              <span className="pr-category-text">Premium Textile</span>
            </div>
            <div className="pr-gsm">
              <span className="pr-gsm-num">{product.gsm}</span>
              <span className="pr-gsm-label">GSM</span>
            </div>
            <span className="pr-vert-brand">Crafted in India</span>
          </div>

          {/* INFO COLUMN */}
          <div className="pr-info-col">

            <div className="pr-eyebrow">
              <span className="pr-eyebrow-rule" />
              <span className="pr-eyebrow-text">Handcrafted Collection</span>
            </div>

            <h1 className="pr-name">
              {product.name.split(" ").map((w: string, i: number) =>
                i === 0 ? <i key={i}>{w} </i> : <span key={i}>{w} </span>
              )}
            </h1>

            <div className="pr-stars">
              {["★","★","★","★","★"].map((s, i) => (
                <span key={i} className="pr-star">{s}</span>
              ))}
              <span className="pr-star-count">4.9 · 128 reviews</span>
            </div>

            <div className="pr-ornament">
              <span className="pr-orn-line" />
              <span className="pr-orn-diamond" />
              <span className="pr-orn-line" />
            </div>

            <p className="pr-desc">{product.description}</p>

            <div className="pr-specs">
              <div className="pr-spec">
                <span className="pr-spec-label">Weight</span>
                <span className="pr-spec-val">{product.gsm}<span>gsm</span></span>
              </div>
              <div className="pr-spec">
                <span className="pr-spec-label">Quality</span>
                <span className="pr-spec-val">Premium</span>
              </div>
              <div className="pr-spec">
                <span className="pr-spec-label">Origin</span>
                <span className="pr-spec-val">India</span>
              </div>
            </div>

            <div className="pr-price-row">
              <div className="pr-price-block">
                <span className="pr-cur">₹</span>
                <span className="pr-amount">{product.price}</span>
              </div>
              <span className="pr-per">per piece</span>
            </div>

            {/* ← Client component handles size / qty / cart */}
            <ProductControls product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            }} />

            <div className="pr-trust">
              <div className="pr-trust-item">
                <svg className="pr-trust-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 6v4c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V6L10 2z" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <span className="pr-trust-label">Authentic<br/>Quality</span>
              </div>
              <div className="pr-trust-item">
                <svg className="pr-trust-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="5" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M2 9h16M6 14h2M10 14h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <span className="pr-trust-label">Free<br/>Shipping</span>
              </div>
              <div className="pr-trust-item">
                <svg className="pr-trust-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  <path d="M4 10H2l2-3M16 10h2l-2-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14h6M10 14v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <span className="pr-trust-label">30-Day<br/>Returns</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}