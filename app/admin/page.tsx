import Link from "next/link"

export default function AdminPage() {

 return (

  <div className="p-10">

   <h1 className="text-3xl font-bold mb-6">
    Admin Dashboard
   </h1>

   <div className="grid grid-cols-3 gap-6">

    <Link href="/admin/products" className="border p-6 rounded">
     Products
    </Link>

    <Link href="/admin/orders" className="border p-6 rounded">
     Orders
    </Link>

    <Link href="/admin/users" className="border p-6 rounded">
     Users
    </Link>

   </div>

  </div>

 )
}