import { prisma } from "@/lib/prisma"
import Image from "next/image"


export default async function ProductPage({
 params,
}: {
 params: Promise<{ slug: string }>
}) {

 const { slug } = await params

 const product = await prisma.product.findUnique({
  where: {
   slug: slug,
  },
 })

 if (!product) {
  return <div>Product not found</div>
 }

 return (
  <div className="p-10 grid grid-cols-2 gap-10">

   <Image
    src={product.image}
    alt={product.name}
    width={500}
    height={500}
   />

   <div>
    <h1 className="text-3xl font-bold">{product.name}</h1>

    <p className="mt-2 text-gray-500">
     {product.gsm} GSM
    </p>

    <p className="mt-4 text-xl font-bold">
     ₹{product.price}
    </p>

    <p className="mt-4">
     {product.description}
    </p>
   </div>

  </div>
 )
}