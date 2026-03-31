"use client"

import { useState } from "react"
import { useCartStore } from "@/store/cartStore"

const SIZES = ["S", "M", "L", "XL", "XXL"]

type Props = {
    product: {
        id: string
        name: string
        price: number
        image: string
    }
}

export default function ProductControls({ product }: Props) {
    const [qty, setQty] = useState(1)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [sizeError, setSizeError] = useState(false)

    const addToCart = useCartStore((s) => s.addToCart)
    const openCart = useCartStore((s) => s.openCart)

    const handleAddToCart = () => {
        if (!selectedSize) {
            setSizeError(true)
            return
        }
        setSizeError(false)
        addToCart({
            id: product.id,
            size: selectedSize,
            name: product.name,
            price: product.price,
            quantity: qty,
            image: product.image,
        })
        openCart()
    }

    return (
        <>
            <style>{`
        /* SIZE SELECTOR */
        .pr-size-row {
          margin-bottom: 20px;
        }
        .pr-size-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .pr-size-label {
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--ash);
        }
        .pr-size-error {
          font-size: 9px;
          letter-spacing: 0.15em;
          color: var(--danger);
          animation: fadeIn 0.3s ease forwards;
        }
        .pr-size-btns {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pr-size-btn {
          min-width: 48px;
          height: 40px;
          padding: 0 10px;
          background: var(--raised);
          border: 1px solid var(--edge);
          color: var(--smoke);
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pr-size-btn:hover {
          border-color: rgba(201,165,90,0.5);
          color: var(--gold);
        }
        .pr-size-btn.selected {
          border-color: var(--gold);
          color: var(--gold-hi);
          background: var(--gold-lo);
          box-shadow: 0 0 0 1px var(--gold);
        }

        /* QTY */
        .pr-qty-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .pr-qty-label {
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--ash);
        }
        .pr-qty-ctrl {
          display: flex;
          align-items: center;
          border: 1px solid var(--edge);
          border-radius: 2px;
          overflow: hidden;
        }
        .pr-qty-btn {
          width: 36px; height: 36px;
          background: var(--raised);
          color: var(--smoke);
          border: none;
          cursor: pointer;
          font-size: 18px;
          font-weight: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
          user-select: none;
        }
        .pr-qty-btn:hover { background: var(--edge); color: var(--gold); }
        .pr-qty-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .pr-qty-val {
          width: 44px; height: 36px;
          background: var(--surface);
          color: var(--snow);
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          border-left: 1px solid var(--edge);
          border-right: 1px solid var(--edge);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ADD TO CART */
        .pr-btn-main {
          flex: 1;
          position: relative;
          padding: 18px 24px;
          background: var(--gold);
          color: var(--void);
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: color 0.35s ease;
          width: 100%;
        }
        .pr-btn-main::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold-hi);
          transform: translateX(-101%);
          transition: transform 0.45s cubic-bezier(0.76,0,0.24,1);
        }
        .pr-btn-main:hover::before { transform: translateX(0); }
        .pr-btn-main > * { position: relative; z-index: 1; }
      `}</style>

            {/* SIZE */}
            <div className="pr-size-row">
                <div className="pr-size-header">
                    <span className="pr-size-label">Select Size</span>
                    {sizeError && <span className="pr-size-error">Please select a size</span>}
                </div>
                <div className="pr-size-btns">
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            className={`pr-size-btn${selectedSize === size ? " selected" : ""}`}
                            onClick={() => { setSelectedSize(size); setSizeError(false) }}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* QTY */}
            <div className="pr-qty-row">
                <span className="pr-qty-label">Qty</span>
                <div className="pr-qty-ctrl">
                    <button
                        className="pr-qty-btn"
                        onClick={() => setQty(q => Math.max(1, q - 1))}
                        disabled={qty <= 1}
                    >
                        −
                    </button>
                    <span className="pr-qty-val">{qty}</span>
                    <button
                        className="pr-qty-btn"
                        onClick={() => setQty(q => Math.min(99, q + 1))}
                        disabled={qty >= 99}
                    >
                        +
                    </button>
                </div>
            </div>

            {/* ADD TO CART */}
            <div style={{ marginBottom: 24 }}>
                <button className="pr-btn-main" onClick={handleAddToCart}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M1.5 1.5h1.8l2.1 7.8h6.6l1.5-5.1H4.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="6.5" cy="12.5" r="1" fill="currentColor" />
                        <circle cx="11" cy="12.5" r="1" fill="currentColor" />
                    </svg>
                    <span>Add to Cart</span>
                </button>
            </div>
        </>
    )
}