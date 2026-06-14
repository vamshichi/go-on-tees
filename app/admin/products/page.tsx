import { prisma } from "@/lib/prisma"
import Link from "next/link"
import Image from "next/image"

export const dynamic = "force-dynamic"

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
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

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex gap-4 items-center"
          >
            {product.image?.[0] && (
              <Image
                src={product.image[0]}
                alt={product.name}
                width={100}
                height={100}
                className="rounded object-cover"
              />
            )}

            <div className="flex-1">
              <h2 className="font-semibold text-lg">
                {product.name}
              </h2>

              <p className="text-gray-600">
                ₹{product.price}
              </p>

              <p className="text-sm text-gray-500">
                GSM: {product.gsm}
              </p>

              <p className="text-sm text-gray-500">
                Stock: {product.stock}
              </p>

              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>
            </div>

            <Link
              href={`/admin/products/${product.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}