import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  const product = await prisma.product.findUnique({ where: { id } })

  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 })

  return NextResponse.json(product)
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  const body = await req.json()

  const product = await prisma.product.update({
    where: { id },
    data: body
  })

  return NextResponse.json(product)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

  // Delete related OrderItems first, then delete the product
  await prisma.$transaction([
    prisma.orderItem.deleteMany({ where: { productId: id } }),
    prisma.product.delete({ where: { id } })
  ])

  return NextResponse.json({ success: true })
}