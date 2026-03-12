import { prisma } from "@/lib/prisma"
import Link from "next/link"
export const dynamic = 'force-dynamic';


export default async function ProductsPage(){

 const products = await prisma.product.findMany({
  orderBy:{createdAt:"desc"}
 })

 return(

  <div className="p-10">

   <div className="flex justify-between mb-6">

    <h1 className="text-3xl font-bold">
     Products
    </h1>

    <Link
     href="/admin/products/new"
     className="bg-black text-white px-4 py-2 rounded"
    >
     Add Product
    </Link>

   </div>

   {products.map(product =>(

    <div key={product.id} className="border p-4 mb-4">

     <p className="font-semibold">
      {product.name}
     </p>

     <p>₹{product.price}</p>

     <Link
      href={`/admin/products/${product.id}`}
      className="text-blue-500"
     >
      Edit
     </Link>

    </div>

   ))}

  </div>

 )
}