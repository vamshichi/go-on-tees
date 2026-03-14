"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppFloat() {

 const phone = "919597354107" // country code + number

 return (

  <a
   href={`https://wa.me/${phone}`}
   target="_blank"
   rel="noopener noreferrer"
   style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "60px",
    height: "60px",
    background: "#25D366",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "28px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    zIndex: 9999,
    cursor: "pointer"
   }}
  >

   <FaWhatsapp />

  </a>

 )
}