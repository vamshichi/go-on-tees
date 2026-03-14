import { T } from "@/components/home/GlobalStyle"
import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export default function Footer() {

    return (

        <footer
            style={{
                background: "#020810",
                borderTop: "1px solid rgba(0,200,255,0.15)",
                // marginTop:"6rem"
            }}
        >

            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "4rem 2rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: "3rem"
                }}
            >

                {/* BRAND */}

                <div>

                    <h3
                        style={{
                            fontFamily: T.fontDisplay,
                            fontSize: "1.8rem",
                            color: T.neon,
                            marginBottom: "1rem"
                        }}
                    >
                        GO-ON TEES
                    </h3>

                    <p
                        style={{
                            fontSize: "0.9rem",
                            color: T.textMuted,
                            lineHeight: 1.7
                        }}
                    >
                        Premium GSM streetwear from 140-300 GSM.
                        Built for comfort, durability, and modern fashion.
                    </p>

                </div>


                {/* SHOP */}

                <div>

                    <h4 style={{ marginBottom: "1rem", fontFamily: T.fontUI, color: "#fff" }}>
                        Shop
                    </h4>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "#fff" }}>

                        <Link href="/shop">All Products</Link>
                        <Link href="/shop?category=men">Men</Link>
                        <Link href="/shop?category=women">Women</Link>
                        <Link href="/shop?category=men-oversized">Oversized</Link>

                    </div>

                </div>


                {/* HELP */}

                <div>

                    <h4 style={{ marginBottom: "1rem", fontFamily: T.fontUI, color: "#fff" }}>
                        Help
                    </h4>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "#fff" }}>

                        <a href="#">Shipping</a>
                        <a href="#">Returns</a>
                        <a href="#">Contact</a>

                    </div>

                </div>


                {/* SOCIAL */}

                <div>

                    <h4 style={{ marginBottom: "1rem", fontFamily: T.fontUI, color: "#fff" }}>
                        Follow Us
                    </h4>

                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>

 <a
  href="https://www.instagram.com/go.on.tees?igsh=cDRvMTU5bXJ1ZGww&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  style={{
   color: "#fff",
   fontSize: "1.6rem",
   transition: "0.3s"
  }}
 >
  <FaInstagram />
 </a>

 <a
  href="https://www.facebook.com/profile.php?id=61588323502780"
  target="_blank"
  rel="noopener noreferrer"
  style={{
   color: "#fff",
   fontSize: "1.6rem",
   transition: "0.3s"
  }}
 >
  <FaFacebook />
 </a>

</div>

                </div>

            </div>


            {/* bottom */}

            <div
                style={{
                    borderTop: "1px solid rgba(0,200,255,0.1)",
                    padding: "1.5rem",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: T.textMuted
                }}
            >

                © 2026 GO-ON TEES — All Rights Reserved

            </div>

        </footer>

    )
}