import ProductCard from "@/components/products/ProductCard"
import { T } from "@/components/home/GlobalStyle"
import Link from "next/link"

async function getProducts(searchParams:any) {

 const query = new URLSearchParams()

 if(searchParams.gsm) query.append("gsm", searchParams.gsm)
 if(searchParams.category) query.append("category", searchParams.category)

 const res = await fetch(
  `https://go-on-tees.vercel.app/api/products?${query.toString()}`,
  { cache: "no-store" }
 )

 return res.json()
}

export default async function Shop({ searchParams }: any) {

 const params = await searchParams
 const products = await getProducts(params)

 return (

  <div
   style={{
    background:T.bgDark,
    minHeight:"100vh",
    padding:"3rem 1.5rem"
   }}
  >

   <div
    style={{
     maxWidth:1200,
     margin:"0 auto"
    }}
   >

    {/* LAYOUT */}

    <div className="shop-layout">

     {/* SIDEBAR */}

     <aside
      style={{
       background:T.bgCard,
       border:"1px solid rgba(0,200,255,0.2)",
       padding:"1.5rem",
       height:"fit-content"
      }}
     >

      {/* GSM */}

      <h2
       style={{
        fontFamily:T.fontUI,
        color:T.neon,
        marginBottom:"1rem"
       }}
      >
       Filter by GSM
      </h2>

      <ul
       style={{
        display:"flex",
        flexDirection:"column",
        gap:"0.6rem",
        marginBottom:"2rem"
       }}
      >

       {[140,160,180,200,240,260,280,300].map(gsm=>(

        <li key={gsm}>

         <Link
          href={`/shop?gsm=${gsm}`}
          style={{
           color:"rgba(255,255,255,0.7)",
           textDecoration:"none"
          }}
         >
          {gsm} GSM
         </Link>

        </li>

       ))}

      </ul>


      {/* CATEGORY */}

      <h2
       style={{
        fontFamily:T.fontUI,
        color:T.neon,
        marginBottom:"1rem"
       }}
      >
       Category
      </h2>

      <ul
       style={{
        display:"flex",
        flexDirection:"column",
        gap:"0.6rem"
       }}
      >

       <li>
        <Link href="/shop?category=men" style={{color:"rgba(255,255,255,0.7)"}}>
         Men
        </Link>
       </li>

       <li>
        <Link href="/shop?category=women" style={{color:"rgba(255,255,255,0.7)"}}>
         Women
        </Link>
       </li>

       <li>
        <Link href="/shop?category=men-oversized" style={{color:"rgba(255,255,255,0.7)"}}>
         Men Oversized
        </Link>
       </li>

       <li>
        <Link href="/shop?category=women-oversized" style={{color:"rgba(255,255,255,0.7)"}}>
         Women Oversized
        </Link>
       </li>

      </ul>

     </aside>


     {/* PRODUCTS */}

     <div
      style={{
       display:"grid",
       gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",
       gap:"1.5rem"
      }}
     >

      {products.map((product:any)=>(

       <ProductCard
        key={product.id}
        product={product}
       />

      ))}

     </div>

    </div>

   </div>

  </div>

 )
}