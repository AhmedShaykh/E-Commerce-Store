"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const SignOut = () => {
    return (
        <div
            className="headerDiv px-2 gap-x-1 cursor-pointer"
            onClick={() => signOut()}
        >
            <FiLogOut className="text-2xl" />

            <p className="text-sm font-semibold">
                Logout
            </p>
        </div>
    )
}

export default SignOut;