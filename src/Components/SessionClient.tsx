"use client";
import React, { useEffect } from "react";
import { addUser, deleteUser } from "@/redux/cartSlice";
import { StateProps } from "../../Types";
import SignOut from "./SignOut";
import Login from "./Login";
import { BsBookmarks } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const SessionClient = ({ session }: any) => {

    const dispatch = useDispatch();

    const { orderData } = useSelector(
        (state: StateProps) => state.cart
    );

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

            {orderData?.order?.length > 0 && session && (
                <Link
                    href={"/order"}
                    className="headerDiv px-2 gap-x-1 cursor-pointer"
                >
                    <BsBookmarks className="text-2xl" />
                    <p className="text-sm font-semibold">
                        Orders
                    </p>
                </Link>
            )}

            {session && (
                <SignOut />
            )}
        </>
    )
};

export default SessionClient;