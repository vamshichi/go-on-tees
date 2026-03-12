import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

 const body = await req.json()

 const order = await prisma.order.create({
  data: {
   name: body.name,
   phone: body.phone,
   address: body.address,
   city: body.city,
   pincode: body.pincode,
   total: body.total,

   items: {
    create: body.items.map((item:any) => ({
     productId: item.productId,
     quantity: item.quantity,
     price: item.price
    }))
   }
  }
 })

 return NextResponse.json(order)
}