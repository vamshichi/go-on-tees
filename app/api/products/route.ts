import { prisma } from "@/lib/prisma"
import cloudinary from "@/lib/cloudinary"
import { NextResponse } from "next/server"

export async function POST(req:Request){

 const formData = await req.formData()

 const name = formData.get("name") as string
 const price = Number(formData.get("price"))
 const gsm = Number(formData.get("gsm"))
 const category = formData.get("category") as string
 const stock = Number(formData.get("stock"))
 const file = formData.get("image") as File

 const bytes = await file.arrayBuffer()
 const buffer = Buffer.from(bytes)

 const upload = await new Promise<any>((resolve,reject)=>{

  cloudinary.uploader.upload_stream(
   { folder:"products" },
   (error,result)=>{
    if(result) resolve(result)
    else reject(error)
   }
  ).end(buffer)

 })

 const product = await prisma.product.create({
  data:{
   name,
   slug:name.toLowerCase().replaceAll(" ","-"),
   description:"",
   price,
   gsm,
   category,
   stock,
   image:upload.secure_url
  }
 })

 return NextResponse.json(product)
}

export async function GET(req: Request) {

 const { searchParams } = new URL(req.url)

 const gsm = searchParams.get("gsm")
 const category = searchParams.get("category")
 const search = searchParams.get("search")

 const products = await prisma.product.findMany({
  where: {
   gsm: gsm ? Number(gsm) : undefined,
   category: category ? category : undefined,
   name: search
    ? { contains: search, mode: "insensitive" }
    : undefined
  }
 })

 return NextResponse.json(products)
}