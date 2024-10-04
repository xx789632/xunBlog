"use client"
import React from 'react';
import {SiNaver} from "react-icons/si";
import {signIn} from "next-auth/react";

const SignInWithNaverButton = () => {
    const SignInWithNaver =async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await signIn("naver")
    };

    return (
        <button className="bg-green-500 " onClick={SignInWithNaver}>
            <SiNaver/>
            naver
        </button>
    );
};

export default SignInWithNaverButton;
