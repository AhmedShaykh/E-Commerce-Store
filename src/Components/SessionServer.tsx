import React from "react";
import { authOptions } from "@/lib/auth";
import SignOut from "./SignOut";
import Login from "./Login";
import { getServerSession } from "next-auth";
import Image from "next/image";

const SessionServer = async () => {

    const session = await getServerSession(authOptions);

    return (
        <>
            {!session && (
                <Login />
            )}

            {session && (
                <Image
                    src={session?.user?.image as string}
                    alt="user image"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
            )}

            {session && (
                <SignOut />
            )}
        </>
    )
};

export default SessionServer;