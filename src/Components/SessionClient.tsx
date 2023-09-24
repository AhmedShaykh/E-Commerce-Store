"use client";
import React, { useEffect } from "react";
import { addUser, deleteUser } from "@/redux/cartSlice";
import SignOut from "./SignOut";
import Login from "./Login";
import { useDispatch } from "react-redux";
import Image from "next/image";

const SessionClient = ({ session }: any) => {

    const dispatch = useDispatch();

    useEffect(() => {

        if (session) {

            dispatch(
                addUser({
                    name: session?.user?.name,
                    email: session?.user?.email,
                    image: session?.user?.image,
                })
            );

        } else {

            dispatch(deleteUser());

        }

    }, [session, dispatch]);

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

export default SessionClient;