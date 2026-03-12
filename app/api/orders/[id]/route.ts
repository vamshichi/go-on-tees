import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PATCH(
 req: Request,
 { params }: { params: Promise<{ id: string }> }
) {

 const body = await req.json()

 const order = await prisma.order.update({
  where: {
   id: (await params).id
  },
  data: {
   status: body.status
  }
 })

 return NextResponse.json(order)

}