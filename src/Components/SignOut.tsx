"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

const SignOut = () => {

    const { refresh } = useRouter();

    const logOut = () => {

        signOut();

        refresh();

    };

    return (
        <div
            className="headerDiv px-2 gap-x-1 cursor-pointer"
            onClick={logOut}
        >
            <FiLogOut className="text-2xl" />

            <p className="text-sm font-semibold">
                Logout
            </p>
        </div>
    )
}

export default SignOut;