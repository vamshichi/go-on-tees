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

  <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-6 z-50">

   <button
    onClick={closeCart}
    className="text-gray-500 mb-4"
   >
    Close
   </button>

   <h2 className="text-xl font-bold mb-4">
    Cart
   </h2>

   {cart.length === 0 && <p>Cart is empty</p>}

   {cart.map((item) => (

    <div key={item.id} className="mb-4">

     <p>{item.name}</p>

     <p>
      ₹{item.price} × {item.quantity}
     </p>

     <button
      onClick={() => removeFromCart(item.id)}
      className="text-red-500"
     >
      Remove
     </button>

    </div>

   ))}

   <div className="mt-6 font-bold">
    Total: ₹{total}
   </div>

   <Link href="/checkout">
    <button className="mt-4 w-full bg-black text-white py-2 rounded">
     Checkout
    </button>
   </Link>

  </div>

 )
}