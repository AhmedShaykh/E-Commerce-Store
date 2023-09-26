"use client";
import React, { useEffect, useState } from "react";
import { resetCart, saveOrder } from "@/redux/cartSlice";
import { ProductsType, StateProps } from "../../Types";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

const PaymentForm = () => {

    const [totalAmt, setTotalAmt] = useState<number>(0);

    const { productData, userInfo } = useSelector((state: StateProps) => state?.cart);

    const dispatch = useDispatch();

    useEffect(() => {

        let amt = 0;

        productData.map((item: ProductsType) => {

            amt += item.price * item.quantity;

            return;
        });

        setTotalAmt(amt);

    }, [productData]);

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );

    const { data: session } = useSession();

    const handleCheckout = async () => {

        const stripe = await stripePromise;

        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: productData,
                email: session?.user?.email
            })
        });

        const data = await response.json();

        if (response.ok) {

            await dispatch(saveOrder({ order: productData, id: data.id }));

            stripe?.redirectToCheckout({ sessionId: data.id });

            dispatch(resetCart());

        } else {

            throw new Error("Failed To Create Stripe Payment");

        }

    };

    return (
        <div className="w-full bg-white p-4">
            <h2 className="font-semibold text-2xl text-center my-2">Cart Totals</h2>

            <div className="border-b-[1px] border-b-slate-300 py-4">
                <div className="max-w-lg flex items-center justify-between">
                    <p className="uppercase font-medium">Sub total</p>
                    <p className="font-bold">
                        <FormattedPrice amount={totalAmt} />
                    </p>
                </div>
            </div>

            <div className="border-b-[1px] border-b-slate-300 py-4">
                <div className="max-w-lg flex items-center justify-between">
                    <p className="uppercase font-medium">Shipping</p>
                    <p className="font-bold">
                        <FormattedPrice amount={20} />
                    </p>
                </div>
            </div>

            <div className="border-b-[1px] border-b-slate-300 py-4">
                <div className="max-w-lg flex items-center justify-between">
                    <p className="uppercase font-medium">Total Price</p>
                    <p className="font-bold">
                        <FormattedPrice amount={totalAmt + 20} />
                    </p>
                </div>
            </div>

            {userInfo ? (
                <div className="flex justify-center">
                    <button
                        className="mx-auto bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-600 cursor-pointer duration-200"
                        onClick={handleCheckout}
                    >
                        Proceed To Checkout
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <button className="mx-auto bg-black text-slate-100 mt-4 mb-2 py-3 px-6 hover:bg-orange-600 cursor-not-allowed duration-200">
                        Proceed To Checkout
                    </button>

                    <p className="text-base mt-2 text-red-500 font-semibold animate-bounce">
                        Please Login To Continue
                    </p>
                </div>
            )}
        </div>
    )
};

export default PaymentForm;