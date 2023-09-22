"use client";
import { signIn } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";

const Login = () => {
    return (
        <div
            className="headerDiv cursor-pointer"
            onClick={() => signIn()}
        >
            <AiOutlineUser className="text-2xl" />

            <p className="text-sm font-semibold">
                Login/Register
            </p>
        </div>
    )
};

export default Login;