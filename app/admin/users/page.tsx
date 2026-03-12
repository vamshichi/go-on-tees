import { prisma } from "@/lib/prisma"

export default async function UsersPage(){

 const users = await prisma.user.findMany({
  include:{
   orders:true
  }
 })

 return(

  <div className="p-10">

   <h1 className="text-3xl font-bold mb-6">
    Users
   </h1>

   {users.map(user=>(

    <div key={user.id} className="border p-4 mb-4">

     <p>{user.name}</p>
     <p>{user.email}</p>

     <p>
      Orders: {user.orders.length}
     </p>

    </div>

   ))}

  </div>

 )
}