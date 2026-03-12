import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

 await prisma.product.createMany({
  data: [

   {
    name: "Men Black T-shirt 180 GSM",
    slug: "men-black-180",
    description: "Premium 180 GSM cotton T-shirt",
    price: 499,
    gsm: 180,
    category: "men",
    image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    stock: 50
   },

   {
    name: "Men Oversized 240 GSM",
    slug: "men-oversized-240",
    description: "Heavyweight oversized streetwear",
    price: 799,
    gsm: 240,
    category: "men-oversized",
    image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    stock: 40
   },

   {
    name: "Women Basic 160 GSM",
    slug: "women-basic-160",
    description: "Comfort daily wear",
    price: 399,
    gsm: 160,
    category: "women",
    image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    stock: 60
   }

  ]
 })

}

main()