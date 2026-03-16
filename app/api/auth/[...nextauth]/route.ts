import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

const handler = NextAuth({

 providers: [

  CredentialsProvider({
   name: "credentials",

   credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" }
   },

   async authorize(credentials) {

    if (!credentials?.email || !credentials?.password) {
     return null
    }

    // find user in database
    const user = await prisma.user.findUnique({
     where: { email: credentials.email }
    })

    if (!user) {
     return null
    }

    // compare password
    const passwordMatch = await bcrypt.compare(
     credentials.password,
     user.password
    )

    if (!passwordMatch) {
     return null
    }

    // return session user
    return {
     id: user.id,
     name: user.name,
     email: user.email
    }

   }

  })

 ],

 session: {
  strategy: "jwt"
 },

 pages: {
  signIn: "/login"
 },

 secret: process.env.NEXTAUTH_SECRET

})

export { handler as GET, handler as POST }