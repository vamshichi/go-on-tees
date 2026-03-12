"use client"

import { useCartStore } from "@/store/cartStore"
import { useState } from "react"
import axios from "axios"

export default function CheckoutPage() {

 const cart = useCartStore((state) => state.cart)
 const clearCart = useCartStore((state) => state.clearCart)

 const [form, setForm] = useState({
  name: "",
  phone: "",
  address: "",
  city: "",
  pincode: ""
 })

 const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
 )

const handleSubmit = async (e:any) => {
 e.preventDefault()

 await axios.post("/api/orders", {
  ...form,
  items: cart.map((item) => ({
   productId: item.id,
   quantity: item.quantity,
   price: item.price
  })),
  total
 })

 clearCart()

 alert("Order placed successfully!")
}

 return (

  <div className="max-w-xl mx-auto p-10">

   <h1 className="text-3xl font-bold mb-6">
    Checkout
   </h1>

   <form onSubmit={handleSubmit} className="space-y-4">

    <input
     placeholder="Name"
     className="border p-2 w-full"
     onChange={(e)=>setForm({...form,name:e.target.value})}
    />

    <input
     placeholder="Phone"
     className="border p-2 w-full"
     onChange={(e)=>setForm({...form,phone:e.target.value})}
    />

    <input
     placeholder="Address"
     className="border p-2 w-full"
     onChange={(e)=>setForm({...form,address:e.target.value})}
    />

    <input
     placeholder="City"
     className="border p-2 w-full"
     onChange={(e)=>setForm({...form,city:e.target.value})}
    />

    <input
     placeholder="Pincode"
     className="border p-2 w-full"
     onChange={(e)=>setForm({...form,pincode:e.target.value})}
    />

    <div className="font-bold">
     Total: ₹{total}
    </div>

    <button
     className="bg-black text-white px-6 py-2 rounded"
    >
     Place Order (Cash on Delivery)
    </button>

   </form>

  </div>
 )
}