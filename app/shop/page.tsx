import ProductCard from "@/components/products/ProductCard"
import { T } from "@/components/home/GlobalStyle"

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
    background: T.bgDark,
    minHeight: "100vh",
    padding: "4rem 2rem"
   }}
  >

   <div
    style={{
     maxWidth: 1200,
     margin: "0 auto"
    }}
   >

    <div
     style={{
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: "2rem"
     }}
    >

     {/* Sidebar */}

     <div
      style={{
       background: T.bgCard,
       border: "1px solid rgba(0,200,255,0.2)",
       padding: "2rem"
      }}
     >

      <h2
       style={{
        fontFamily: T.fontUI,
        color: T.neon,
        marginBottom: "1rem"
       }}
      >
       Filter by GSM
      </h2>

      <ul
       style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        marginBottom: "2rem"
       }}
      >

       {[140,160,180,200,240,260,280,300].map(gsm=>(
        <li key={gsm}>
         <a
          href={`/shop?gsm=${gsm}`}
          style={{
           color: "rgba(255,255,255,0.7)",
           textDecoration: "none"
          }}
         >
          {gsm} GSM
         </a>
        </li>
       ))}

      </ul>


      {/* Category */}

      <h2
       style={{
        fontFamily: T.fontUI,
        color: T.neon,
        marginBottom: "1rem"
       }}
      >
       Category
      </h2>

      <ul
       style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem"
       }}
      >

       <li>
        <a href="/shop?category=men" style={{color:"rgba(255,255,255,0.7)"}}>
         Men
        </a>
       </li>

       <li>
        <a href="/shop?category=women" style={{color:"rgba(255,255,255,0.7)"}}>
         Women
        </a>
       </li>

       <li>
        <a href="/shop?category=men-oversized" style={{color:"rgba(255,255,255,0.7)"}}>
         Men Oversized
        </a>
       </li>

       <li>
        <a href="/shop?category=women-oversized" style={{color:"rgba(255,255,255,0.7)"}}>
         Women Oversized
        </a>
       </li>

      </ul>

     </div>


     {/* Products */}

     <div
      style={{
       display: "grid",
       gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
       gap: "1.5rem"
      }}
     >

      {products.map((product:any)=>(
       <ProductCard key={product.id} product={product}/>
      ))}

     </div>

    </div>

   </div>

  </div>

 )
}