import { T } from "@/components/home/GlobalStyle"
import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export default function Footer() {

 return (

  <footer
   style={{
    background:"#020810",
    borderTop:"1px solid rgba(0,200,255,0.15)"
   }}
  >

   <div
    className="footer-grid"
    style={{
     maxWidth:1200,
     margin:"0 auto",
     padding:"3rem 1.5rem",
     display:"grid",
     gap:"2rem"
    }}
   >

    {/* BRAND */}

    <div>

     <h3
      style={{
       fontFamily:T.fontDisplay,
       fontSize:"1.6rem",
       color:T.neon,
       marginBottom:"1rem"
      }}
     >
      GO-ON TEES
     </h3>

     <p
      style={{
       fontSize:"0.9rem",
       color:T.textMuted,
       lineHeight:1.7
      }}
     >
      Premium GSM streetwear from 140–300 GSM.
      Built for comfort, durability, and modern fashion.
     </p>

    </div>


    {/* SHOP */}

    <div>

     <h4 style={{marginBottom:"1rem",fontFamily:T.fontUI,color:"#fff"}}>
      Shop
     </h4>

     <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>

      <Link href="/shop">All Products</Link>
      <Link href="/shop?category=men">Men</Link>
      <Link href="/shop?category=women">Women</Link>
      <Link href="/shop?category=men-oversized">Oversized</Link>

     </div>

    </div>


    {/* HELP */}

    <div>

     <h4 style={{marginBottom:"1rem",fontFamily:T.fontUI,color:"#fff"}}>
      Help
     </h4>

     <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>

      <Link href="#">Shipping</Link>
      <Link href="#">Returns</Link>
      <Link href="/contact">Contact</Link>

     </div>

    </div>


    {/* SOCIAL */}

    <div>

     <h4 style={{marginBottom:"1rem",fontFamily:T.fontUI,color:"#fff"}}>
      Follow Us
     </h4>

     <div style={{display:"flex",gap:"1rem"}}>

      <a
       href="https://www.instagram.com/go.on.tees"
       target="_blank"
       style={{color:"#fff",fontSize:"1.5rem"}}
      >
       <FaInstagram/>
      </a>

      <a
       href="https://www.facebook.com/profile.php?id=61588323502780"
       target="_blank"
       style={{color:"#fff",fontSize:"1.5rem"}}
      >
       <FaFacebook/>
      </a>

     </div>

    </div>

   </div>


   {/* Bottom */}

   <div
    style={{
     borderTop:"1px solid rgba(0,200,255,0.1)",
     padding:"1.2rem",
     textAlign:"center",
     fontSize:"0.8rem",
     color:T.textMuted
    }}
   >
    © 2026 GO-ON TEES — All Rights Reserved
   </div>

  </footer>

 )
}