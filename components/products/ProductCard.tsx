"use client"

import Image from "next/image"
import { useCartStore } from "@/store/cartStore"
import Link from "next/link"

export default function ProductCard({ product }: any) {

 const addToCart = useCartStore((state) => state.addToCart)

 return (

  <div className="border rounded-xl p-4 hover:shadow-xl transition">

   <Image
    src={product.image}
    alt={product.name}
    width={300}
    height={300}
    className="rounded-lg"
   />

   <h2 className="mt-3 font-semibold text-white">
    {product.name}
   </h2>

   <p className="text-gray-500 text-sm">
    {product.gsm} GSM
   </p>

   <p className="font-bold mt-2 text-white">
    ₹{product.price}
   </p>

   <button
    onClick={() =>
     addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: product.quantity
     })
    }
    className="mt-3 w-full bg-black text-white py-2 rounded-lg"
   >
    Add To Cart
   </button>

  </div>

 )
}