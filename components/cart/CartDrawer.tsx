"use client"

import { useCartStore } from "@/store/cartStore"
import Link from "next/link"

export default function CartDrawer() {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const isOpen = useCartStore((state) => state.isOpen)
  const closeCart = useCartStore((state) => state.closeCart)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@200;300;400;500&display=swap');

        :root {
          --void:    #0b0c0e;
          --surface: #111316;
          --raised:  #181b1f;
          --edge:    #242830;
          --gold:    #c9a55a;
          --gold-hi: #e8c87a;
          --gold-lo: rgba(201,165,90,0.12);
          --ash:     #6b7280;
          --smoke:   #9ca3af;
          --snow:    #f1f0ee;
          --danger:  #e05252;
        }

        /* OVERLAY */
        .cd-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(5, 6, 7, 0.75);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cd-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        /* DRAWER PANEL */
        .cd-panel {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 201;
          width: 100%;
          max-width: 440px;
          height: 100dvh;
          background: var(--surface);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.55s cubic-bezier(0.76, 0, 0.24, 1);
          font-family: 'DM Sans', sans-serif;
          border-left: 1px solid var(--edge);
          box-shadow: -24px 0 80px rgba(0,0,0,0.6);
        }

        .cd-panel.open {
          transform: translateX(0);
        }

        /* Grain texture overlay */
        .cd-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .cd-panel > * { position: relative; z-index: 1; }

        /* HEADER */
        .cd-header {
          padding: 32px 32px 0;
          flex-shrink: 0;
        }

        .cd-header-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .cd-title-group {}

        .cd-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .cd-eyebrow-rule {
          width: 20px;
          height: 1px;
          background: var(--gold);
          box-shadow: 0 0 4px var(--gold);
        }

        .cd-eyebrow-text {
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .cd-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--snow);
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .cd-title i {
          font-style: italic;
          color: var(--gold-hi);
        }

        .cd-count-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: 1px solid var(--gold);
          border-radius: 50%;
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          color: var(--gold);
          margin-top: 4px;
          box-shadow: 0 0 10px rgba(201,165,90,0.15);
        }

        .cd-close {
          background: var(--raised);
          border: 1px solid var(--edge);
          color: var(--ash);
          width: 36px;
          height: 36px;
          border-radius: 2px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s, color 0.2s;
          flex-shrink: 0;
        }

        .cd-close:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .cd-divider {
          height: 1px;
          background: linear-gradient(to right, var(--edge), transparent);
          margin-top: 24px;
        }

        /* ITEMS */
        .cd-items {
          flex: 1;
          overflow-y: auto;
          padding: 0 32px;
          scrollbar-width: none;
        }

        .cd-items::-webkit-scrollbar { display: none; }

        /* EMPTY STATE */
        .cd-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          padding: 60px 0;
        }

        .cd-empty-icon {
          color: var(--edge);
          opacity: 0.6;
        }

        .cd-empty-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-style: italic;
          color: var(--ash);
          font-weight: 400;
        }

        .cd-empty-sub {
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--edge);
        }

        /* ITEM CARD */
        .cd-item {
          padding: 20px 0;
          border-bottom: 1px solid var(--edge);
          display: grid;
          grid-template-columns: 64px 1fr auto;
          gap: 14px;
          align-items: start;
          animation: cdFadeUp 0.4s ease forwards;
        }

        .cd-item:last-child {
          border-bottom: none;
        }

        .cd-item-img {
          width: 64px;
          height: 80px;
          object-fit: cover;
          border-radius: 2px;
          filter: saturate(0.8) contrast(1.05);
          border: 1px solid var(--edge);
        }

        .cd-item-img-placeholder {
          width: 64px;
          height: 80px;
          border-radius: 2px;
          background: var(--raised);
          border: 1px solid var(--edge);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--edge);
        }

        .cd-item-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .cd-item-name {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 400;
          color: var(--snow);
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cd-item-meta {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ash);
          margin-bottom: 8px;
        }

        .cd-item-price-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cd-item-unit {
          font-size: 11px;
          color: var(--ash);
          font-weight: 300;
        }

        .cd-item-price {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          color: var(--gold-hi);
          font-weight: 500;
        }

        .cd-item-qty {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-top: 4px;
        }

        .cd-item-qty-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ash);
          margin-right: 6px;
        }

        .cd-item-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .cd-item-subtotal {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--snow);
          white-space: nowrap;
        }

        .cd-remove {
          background: none;
          border: none;
          color: var(--ash);
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          cursor: pointer;
          padding: 4px 0;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .cd-remove:hover { color: var(--danger); }

        /* FOOTER */
        .cd-footer {
          padding: 0 32px 32px;
          flex-shrink: 0;
          background: linear-gradient(to bottom, transparent, var(--void) 40%);
        }

        .cd-footer-divider {
          height: 1px;
          background: var(--edge);
          margin-bottom: 24px;
        }

        .cd-summary {
          margin-bottom: 20px;
        }

        .cd-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .cd-summary-label {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--ash);
        }

        .cd-summary-value {
          font-size: 11px;
          color: var(--smoke);
          font-weight: 300;
        }

        .cd-total-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-top: 12px;
          border-top: 1px solid var(--edge);
          margin-top: 4px;
        }

        .cd-total-label {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-style: italic;
          color: var(--smoke);
          font-weight: 400;
        }

        .cd-total-amount {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 500;
          color: var(--snow);
          letter-spacing: -0.02em;
          display: flex;
          align-items: baseline;
          gap: 3px;
        }

        .cd-total-cur {
          font-size: 16px;
          color: var(--gold);
          font-weight: 400;
        }

        /* CHECKOUT BUTTON */
        .cd-checkout-btn {
          width: 100%;
          position: relative;
          padding: 18px 24px;
          background: var(--gold);
          color: var(--void);
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 10px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: color 0.35s ease;
          margin-bottom: 12px;
          text-decoration: none;
        }

        .cd-checkout-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold-hi);
          transform: translateX(-101%);
          transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }

        .cd-checkout-btn:hover::before { transform: translateX(0); }
        .cd-checkout-btn > * { position: relative; z-index: 1; }

        .cd-continue {
          width: 100%;
          background: none;
          border: 1px solid var(--edge);
          color: var(--ash);
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 300;
          padding: 14px;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s;
        }

        .cd-continue:hover {
          border-color: rgba(201,165,90,0.4);
          color: var(--gold);
        }

        /* ORNAMENT */
        .cd-ornament {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px 0 16px;
        }

        .cd-orn-line { flex: 1; height: 1px; background: var(--edge); }

        .cd-orn-diamond {
          width: 4px; height: 4px;
          background: var(--gold);
          transform: rotate(45deg);
          opacity: 0.6;
        }

        /* ANIMATIONS */
        @keyframes cdFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .cd-panel { max-width: 100%; }
          .cd-header { padding: 24px 20px 0; }
          .cd-items  { padding: 0 20px; }
          .cd-footer { padding: 0 20px 24px; }
        }
      `}</style>

      {/* OVERLAY */}
      <div
        className={`cd-overlay${isOpen ? " open" : ""}`}
        onClick={closeCart}
      />

      {/* PANEL */}
      <div className={`cd-panel${isOpen ? " open" : ""}`}>

        {/* HEADER */}
        <div className="cd-header">
          <div className="cd-header-top">
            <div className="cd-title-group">
              <div className="cd-eyebrow">
                <span className="cd-eyebrow-rule" />
                <span className="cd-eyebrow-text">Your Selection</span>
              </div>
              <h2 className="cd-title">
                <i>Your</i> Cart
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              {itemCount > 0 && (
                <div className="cd-count-badge">{itemCount}</div>
              )}
              <button className="cd-close" onClick={closeCart} aria-label="Close cart">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="cd-divider" />
        </div>

        {/* ITEMS */}
        <div className="cd-items">
          {cart.length === 0 ? (
            <div className="cd-empty">
              <svg className="cd-empty-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M4 4h5.4l6.3 23.4h19.8l4.5-15.3H14.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="38" r="2.5" fill="currentColor"/>
                <circle cx="33" cy="38" r="2.5" fill="currentColor"/>
              </svg>
              <span className="cd-empty-title">Nothing here yet</span>
              <span className="cd-empty-sub">Add pieces to begin</span>
            </div>
          ) : (
            <>
              <div className="cd-ornament">
                <span className="cd-orn-line" />
                <span className="cd-orn-diamond" />
                <span className="cd-orn-line" />
              </div>
              {cart.map((item) => (
                <div key={item.id} className="cd-item">
                  {/* Image */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cd-item-img"
                    />
                  ) : (
                    <div className="cd-item-img-placeholder">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" opacity="0.4"/>
                        <path d="M3 13l4-4 3 3 2-2 5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}

                  {/* Body */}
                  <div className="cd-item-body">
                    <span className="cd-item-name">{item.name}</span>
                    <span className="cd-item-meta">Premium Textile</span>
                    <div className="cd-item-price-row">
                      <span className="cd-item-unit">₹</span>
                      <span className="cd-item-price">{item.price.toLocaleString("en-IN")}</span>
                      <span className="cd-item-unit">× {item.quantity}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="cd-item-actions">
                    <span className="cd-item-subtotal">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                    <button
                      className="cd-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className="cd-footer">
            <div className="cd-footer-divider" />
            <div className="cd-summary">
              <div className="cd-summary-row">
                <span className="cd-summary-label">Subtotal</span>
                <span className="cd-summary-value">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="cd-summary-row">
                <span className="cd-summary-label">Shipping</span>
                <span className="cd-summary-value" style={{ color: "#6ee7b7", fontSize: 10 }}>
                  Complimentary
                </span>
              </div>
              <div className="cd-total-row">
                <span className="cd-total-label">Order Total</span>
                <span className="cd-total-amount">
                  <span className="cd-total-cur">₹</span>
                  {total.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Link href="/checkout" onClick={closeCart} className="cd-checkout-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Proceed to Checkout</span>
            </Link>

            <button className="cd-continue" onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </>
  )
}