"use server"
import {getSession} from "@/actions/getSession";
import prisma from "@/utils/prismaClient";
import bcrypt from "bcrypt";
// Create User
export async function createUser(formData:{username:string,email:string,password:string}){
    const {username,email,password} = formData
    if (!username || !email || !password) return JSON.stringify({error:"Invalid form data"})

    // Check if user exists
    const user =await prisma.user.findFirst(
        {
            where:{
                username
            }
        }
    )
    if (user) return JSON.stringify({error:"Username already exists"})

    const emailUser =await prisma.user.findFirst(
        {
            where:{
                email
            }
        }
    )
    if (emailUser) return JSON.stringify({error:"Email already registered"})

    const hashPass = await bcrypt.hash(password,10)

    await prisma.user.create({
        data:{
            username,
            email,
            password:hashPass
        }
    })
    return JSON.stringify({success:"User created"})
}

export async function updateUser(){

}

export async function deleteUser(){

}

//
export async function getUser(){
    const session =await getSession()
    if (!session) return null

    const email = session.user?.email
    if (!email) return null

    const user = await prisma.user.findFirst({
        where:{
            email:email
        }
    })

    return {
        ...user,
        password:null,
        createdAt:user?.createdAt.toISOString(),
        updatedAt:user?.updatedAt.toISOString()
    }
}
