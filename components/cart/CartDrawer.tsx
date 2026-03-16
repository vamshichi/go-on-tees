"use client"

import { useCartStore } from "@/store/cartStore"
import Link from "next/link"

export default function CartDrawer() {

  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const isOpen = useCartStore((state) => state.isOpen)
  const closeCart = useCartStore((state) => state.closeCart)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (!isOpen) return null

  return (

    // z-[200] is higher than navbar's z-index of 100
    <div className="fixed inset-0 z-[200] flex">

      {/* Overlay */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full sm:w-[420px] h-full bg-white shadow-2xl p-6 flex flex-col animate-slideIn">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Cart</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-black text-xl">
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto space-y-4">

          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="border-t pt-4">
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <Link href="/checkout" onClick={closeCart}>
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition">
              Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>

  )
}