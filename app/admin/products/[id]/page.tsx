"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function EditProduct({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params)

  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const [image, setImage] = useState("")
  const [form, setForm] = useState({
    name: "",
    price: "",
    gsm: "",
    category: "",
    stock: ""
  })

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(`/api/products/${id}`)
      const data = await res.json()

      setForm({
        name: data.name || "",
        price: data.price || "",
        gsm: data.gsm || "",
        category: data.category || "",
        stock: data.stock || ""
      })

      setImage(data.image || "")
      setLoading(false)
    }

    loadProduct()
  }, [id])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })

    router.push("/admin/products")
  }

  async function handleDelete() {
    const confirmed = confirm("Are you sure you want to delete this product?")
    if (!confirmed) return

    setDeleting(true)

    await fetch(`/api/products/${id}`, {
      method: "DELETE"
    })

    router.push("/admin/products")
  }

  if (loading) return <p className="p-10">Loading...</p>

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      {/* Product Image */}
      {image && (
        <div className="mb-6">
          <Image
            src={image}
            alt="Product image"
            width={200}
            height={200}
            className="object-cover rounded border"
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          className="border p-2"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2"
        />

        <input
          name="gsm"
          value={form.gsm}
          onChange={handleChange}
          placeholder="GSM"
          className="border p-2"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2"
        />

        <input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="border p-2"
        />

        <button type="submit" className="bg-black text-white py-2 rounded">
          Update Product
        </button>

      </form>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 disabled:opacity-50"
      >
        {deleting ? "Deleting..." : "Delete Product"}
      </button>

    </div>
  )
}