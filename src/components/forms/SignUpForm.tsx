"use client"
import React, {useState} from 'react';
import SubmitButton from "@/components/buttons/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod";
import {useTranslation} from "@/app/i18n/client";
import {createUser} from "@/actions/user.action";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

interface Props{
    lng: string
}
const SignUpForm: React.FC<Props> = ({lng}) => {
    const router = useRouter()
    const [islaoding,setIsLoading] = useState(false)
    const {t} = useTranslation(lng,"auth")

    const formSchema = z.object({
        username: z.string().min(2,{message: t("usernameMaxError")}).max(50,{message: t("usernameMaxError")}),
        email: z.string().email({message: t("emailError")}),
        password: z.string().min(8,{message: t("passwordMinError")}).max(50,{message: t("passwordMaxError")})
    })
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        await createUser({...values})
            .then(res =>JSON.parse(res))
            .then(data => {
                if(data.success){
                    toast.success(data.success)
                    router.push(`/${lng}/signin`)
                }else{
                    toast.error(data.error)
                }
            })
            .catch(
                (err) => toast.error(err.message)
            )
            .finally(()=> setIsLoading(false))
    }

    return (
        <form className="flex-col-g4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex-col-g2">
                <label>{t("username")}</label>
                <input type="text" {...form.register("username")}/>
                {form.formState.errors.username && (
                    <p className="error-message text-wrap">{form.formState.errors.username.message}</p>
                )}
            </div>
            <div className="flex-col-g2">
                <label>{t("email")}</label>
                <input type="email" {...form.register("email")} />
                {form.formState.errors.email && (
                    <p className="error-message text-wrap">{form.formState.errors.email.message}</p>
                )}
            </div>
            <div className="flex-col-g2">
                <label>{t("password")}</label>
                <input type="password"  {...form.register("password")}/>
                {form.formState.errors.password && (
                    <p className="error-message text-wrap">{form.formState.errors.password.message}</p>
                )}
            </div>
            <SubmitButton label={t("signUp")} loading={islaoding}/>
        </form>
    );
};

export default SignUpForm;
