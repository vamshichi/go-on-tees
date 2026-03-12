"use client"

import axios from "axios"

export default function OrderStatus({id,status}:any){

 const updateStatus = async(value:string)=>{

  await axios.patch(`/api/orders/${id}`,{
   status:value
  })

  location.reload()
 }

 return(

  <select
   defaultValue={status}
   onChange={(e)=>updateStatus(e.target.value)}
   className="border p-2 mt-3"
  >

   <option value="PENDING">Pending</option>
   <option value="CONFIRMED">Confirmed</option>
   <option value="SHIPPED">Shipped</option>
   <option value="DELIVERED">Delivered</option>
   <option value="CANCELLED">Cancelled</option>

  </select>

 )
}