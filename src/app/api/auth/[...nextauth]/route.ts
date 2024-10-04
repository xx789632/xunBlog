import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils/prismaClient";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter"

export const authOptions = {
    // Configure one or more authentication providers
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID as string,
            clientSecret: process.env.NAVER_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            id: "credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email" },
                password: { label: "Password", type: "password", placeholder: "password"}
            },
            // Authorize callback
            async authorize(credentials) {
                const [email, password] = credentials ? [credentials.email, credentials.password] : [null, null]
                console.log(email,password)
                if (!email || !password) return null

                // Find user
                const user = await prisma.user.findFirst({
                    where: {
                        email: email
                    }
                })

                // Check user & password
                if (user && bcrypt.compareSync(password as string, user.password)) {
                    return user
                }

                // Return null if user data could not be retrieved or password did not match
                return null
            }
        })
    ],
}

const handler = NextAuth(authOptions  )
export { handler as GET, handler as POST }
