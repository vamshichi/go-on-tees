"use client"

import Link from "next/link"
import { useState } from "react"
import { useCartStore } from "@/store/cartStore"
import { T } from "@/components/home/GlobalStyle"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"

export default function Navbar() {

 const cart = useCartStore((state:any) => state.cart)
 const openCart = useCartStore((state:any) => state.openCart)

 const { data: session } = useSession()

 const [menuOpen,setMenuOpen] = useState(false)

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
     padding:"1rem 1.5rem",
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
      fontSize:"1.6rem",
      letterSpacing:"0.08em",
      color:T.neon,
      textShadow:"0 0 10px rgba(0,200,255,0.7)",
      textDecoration:"none"
     }}
    >
      <Image
  src="/got.png"   // place logo in public/logo.png
  alt="GO-ON TEES"
  width={80}
  height={80}
 />
    </Link>


    {/* Desktop Links */}

    <div
     className="desktop-menu"
     style={{
      display:"flex",
      gap:"2rem",
      fontFamily:T.fontUI,
      fontSize:"0.9rem",
      letterSpacing:"0.12em",
      textTransform:"uppercase"
     }}
    >

     <Link href="/shop" style={{color:"#fff",textDecoration:"none"}}>Shop</Link>
     <Link href="/shop?category=men" style={{color:"#fff",textDecoration:"none"}}>Men</Link>
     <Link href="/shop?category=women" style={{color:"#fff",textDecoration:"none"}}>Women</Link>
     {/* <Link href="/admin" style={{color:"#fff",textDecoration:"none"}}>Admin</Link> */}

    </div>


    {/* Right Side */}

    <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>

    <div className="nav-actions">

 {session ? (

  <button
   onClick={()=>signOut()}
   style={buttonStyle}
  >
   Sign Out
  </button>

 ) : (

  <button
   onClick={()=>signIn()}
   style={buttonStyle}
  >
   Sign In
  </button>

 )}

 {/* Cart */}

 <button
  onClick={openCart}
  style={{
   ...buttonStyle,
   position:"relative"
  }}
 >
  🛒

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
     {/* Mobile Menu Button */}

     <button
      onClick={()=>setMenuOpen(!menuOpen)}
      className="mobile-menu-btn"
      style={{
       fontSize:"1.4rem",
       background:"transparent",
       border:"none",
       color:"white",
       cursor:"pointer"
      }}
     >
      ☰
     </button>

    </div>

   </div>


   {/* Mobile Menu */}

   {menuOpen && (

 <div
  style={{
   display:"flex",
   flexDirection:"column",
   gap:"1rem",
   padding:"1.5rem",
   background:"rgba(1,10,18,0.95)",
   borderTop:"1px solid rgba(0,200,255,0.2)"
  }}
 >

  {/* NAV LINKS */}

  <Link href="/shop" style={mobileLink}>Shop</Link>
  <Link href="/shop?category=men" style={mobileLink}>Men</Link>
  <Link href="/shop?category=women" style={mobileLink}>Women</Link>
  {/* <Link href="/admin" style={mobileLink}>Admin</Link> */}


  {/* AUTH BUTTON */}

  {session ? (

   <button
    onClick={()=>signOut()}
    style={mobileButton}
   >
    Sign Out
   </button>

  ) : (

   <button
    onClick={()=>signIn()}
    style={mobileButton}
   >
    Sign In
   </button>

  )}


  {/* CART */}

  <button
   onClick={openCart}
   style={mobileButton}
  >
   🛒 Cart ({cartCount})
  </button>

 </div>

)}

  </nav>

 )
}

const buttonStyle = {
 background:"transparent",
 border:"1px solid rgba(0,200,255,0.3)",
 color:"#00c8ff",
 padding:"0.4rem 0.8rem",
 cursor:"pointer",
 fontFamily:"inherit",
 letterSpacing:"0.08em"
}

const mobileLink = {
 color:"#fff",
 textDecoration:"none",
 fontSize:"0.95rem",
 letterSpacing:"0.08em"
}

const mobileButton = {
 border:"1px solid rgba(0,200,255,0.3)",
 background:"transparent",
 color:"#00c8ff",
 padding:"0.6rem",
 cursor:"pointer",
 textAlign:"left" as const
}