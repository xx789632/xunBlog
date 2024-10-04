"use client"
import React from 'react';
import SubmitButton from "@/components/buttons/SubmitButton";
import {useTranslation} from "@/app/i18n/client";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react";

interface Props{
    lng: string
}
const SignInForm:React.FC<Props> = ({lng}) => {
    const {t} = useTranslation(lng, "auth")

    const formSchema = z.object({
        email: z.string().email({message: t("emailError")}),
        password: z.string().min(8,{message: t("passwordMinError")}).max(50,{message: t("passwordMaxError")})
    })
    // 1. Define form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // sign in with credentials
        await signIn("credentials", {email: values.email, password: values.password,redirect: true,callbackUrl:`/`})
    }

    return (
        <form className="flex-col-g4" onSubmit={form.handleSubmit(onSubmit)}>
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
            <SubmitButton label={t("signIn")} loading={false}/>
        </form>
    );
};

export default SignInForm;
