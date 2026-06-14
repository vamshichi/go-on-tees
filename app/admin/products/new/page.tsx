"use client"

import { useState } from "react"
import axios from "axios"

export default function NewProduct(){

 const [form,setForm] = useState({
  name:"",
  description:"",
  price:"",
  gsm:"",
  category:"",
  stock:""
 })

 const [images, setImages] = useState<FileList | null>(null)

 const createProduct = async(e:any)=>{
  e.preventDefault()

  const data = new FormData()

  data.append("name",form.name)
  data.append("description",form.description)
  data.append("price",form.price)
  data.append("gsm",form.gsm)
  data.append("category",form.category)
  data.append("stock",form.stock)

  if (images) {
  Array.from(images).forEach((file) => {
    data.append("images", file)
  })
}
  await axios.post("/api/products",data)

  alert("Product created")
 }

 return(

  <div className="p-10 max-w-xl">

   <h1 className="text-2xl font-bold mb-6">
    Add Product
   </h1>

   <form onSubmit={createProduct} className="space-y-4">

    <input
     placeholder="Name"
     onChange={(e)=>setForm({...form,name:e.target.value})}
     className="border p-2 w-full"
    />

    {/* Description */}

    <textarea
     placeholder="Description"
     onChange={(e)=>setForm({...form,description:e.target.value})}
     className="border p-2 w-full h-28"
    />

    <input
     placeholder="Price"
     onChange={(e)=>setForm({...form,price:e.target.value})}
     className="border p-2 w-full"
    />

    <input
     placeholder="GSM"
     onChange={(e)=>setForm({...form,gsm:e.target.value})}
     className="border p-2 w-full"
    />

    <input
     placeholder="Category"
     onChange={(e)=>setForm({...form,category:e.target.value})}
     className="border p-2 w-full"
    />

    <input
     placeholder="Stock"
     onChange={(e)=>setForm({...form,stock:e.target.value})}
     className="border p-2 w-full"
    />

    {/* Image Upload */}

    <input
 type="file"
 multiple
 accept="image/*"
 onChange={(e) => setImages(e.target.files)}
 className="border p-2 w-full"
/>

    <button className="bg-black text-white px-6 py-2 rounded">
     Create
    </button>

   </form>

  </div>

 )
}