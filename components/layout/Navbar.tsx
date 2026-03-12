"use client"

import Link from "next/link"
import { useCartStore } from "@/store/cartStore"
import { T } from "@/components/home/GlobalStyle"

export default function Navbar() {

 const cart = useCartStore((state:any) => state.cart)
 const openCart = useCartStore((state:any) => state.openCart)

 const cartCount = cart.reduce(
  (sum:any,item:any)=> sum + item.quantity,
  0
 )

 return (

  <nav
   style={{
    position:"sticky",
    top:0,
    zIndex:100,
    backdropFilter:"blur(12px)",
    background:"rgba(1,10,18,0.85)",
    borderBottom:"1px solid rgba(0,200,255,0.2)"
   }}
  >

   <div
    style={{
     maxWidth:1200,
     margin:"0 auto",
     padding:"1.2rem 2rem",
     display:"flex",
     alignItems:"center",
     justifyContent:"space-between"
    }}
   >

    {/* LOGO */}

    <Link
     href="/"
     style={{
      fontFamily:T.fontDisplay,
      fontSize:"1.8rem",
      letterSpacing:"0.08em",
      color:T.neon,
      textShadow:"0 0 10px rgba(0,200,255,0.7)",
      textDecoration:"none"
     }}
    >
     GO-ON TEES
    </Link>


    {/* NAV LINKS */}

    <div
     style={{
      display:"flex",
      gap:"2rem",
      fontFamily:T.fontUI,
      fontSize:"0.9rem",
      letterSpacing:"0.12em",
      textTransform:"uppercase"
     }}
    >

     <Link href="/shop" style={{color:"#fff",textDecoration:"none"}}>
      Shop
     </Link>

     <Link href="/shop?category=men" style={{color:"#fff",textDecoration:"none"}}>
      Men
     </Link>

     <Link href="/shop?category=women" style={{color:"#fff",textDecoration:"none"}}>
      Women
     </Link>

     <Link href="/admin" style={{color:"#fff",textDecoration:"none"}}>
      Admin
     </Link>

    </div>


    {/* CART */}

    <button
     onClick={openCart}
     style={{
      position:"relative",
      background:"transparent",
      border:"1px solid rgba(0,200,255,0.3)",
      color:T.neon,
      padding:"0.5rem 1rem",
      cursor:"pointer",
      fontFamily:T.fontUI,
      letterSpacing:"0.1em"
     }}
    >
     🛒 CART

     {cartCount > 0 && (

      <span
       style={{
        position:"absolute",
        top:"-6px",
        right:"-6px",
        background:T.neon,
        color:"#000",
        fontSize:"0.7rem",
        padding:"2px 6px",
        borderRadius:"50%"
       }}
      >
       {cartCount}
      </span>

     )}

    </button>

   </div>

  </nav>

 )
}