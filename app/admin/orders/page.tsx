import { prisma } from "@/lib/prisma"
import OrderStatus from "@/components/admin/OrderStatus"

export default async function OrdersPage(){

 const orders = await prisma.order.findMany({

  include:{
   user:true,
   items:{
    include:{
     product:true
    }
   }
  },

  orderBy:{
   createdAt:"desc"
  }

 })

 return(

  <div className="p-10">

   <h1 className="text-3xl font-bold mb-6">
    Orders
   </h1>

   {orders.map(order=>(

    <div key={order.id} className="border p-6 mb-6">

     <p className="font-semibold">
      Customer: {order.name}
     </p>

     <p>Phone: {order.phone}</p>

     <p>City: {order.city}</p>

     <div className="mt-4">

      <p className="font-semibold">
       Items
      </p>

      {order.items.map(item=>(

       <div key={item.id}>

        {item.product.name} × {item.quantity}

       </div>

      ))}

     </div>

     <p className="font-bold mt-4">
      Total: ₹{order.total}
     </p>

     <OrderStatus id={order.id} status={order.status}/>

    </div>

   ))}

  </div>

 )
}