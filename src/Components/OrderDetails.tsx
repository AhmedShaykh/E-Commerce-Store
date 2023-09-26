"use client";
import React, { useEffect, useState } from "react";
import { ProductsType, StateProps } from "../../Types";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { resetOrder } from "@/redux/cartSlice";
import Image from "next/image";
import Link from "next/link";

const OrderDetails = () => {

    const [totalAmount, setTotalAmount] = useState<number>(0);

    const dispatch = useDispatch();

    const { orderData } = useSelector((state: StateProps) => state?.cart);

    useEffect(() => {

        let amt = 0;

        orderData?.order?.map((item: ProductsType) => {

            amt += item.price * item.quantity;

            return;
        });

        setTotalAmount(amt);

    }, [orderData.order]);

    return (
        <>
            {orderData?.order?.length > 0 ? (
                <div>
                    <div className="grid grid-cols-7 uppercase text-sm font-medium py-2 border-b-[1px] border-b-gray-300">
                        <p className="col-span-4 text-2xl font-bold">Items</p>
                        <p className="flex items-center justify-center text-2xl font-bold">Quantity</p>
                        <p className="flex items-center justify-center text-2xl font-bold">Unit Price</p>
                        <p className="flex items-center justify-center text-2xl font-bold">Amount</p>
                    </div>
                    <div className="py-2 flex flex-col justify-center gap-2">
                        {orderData?.order?.map((item: ProductsType) => (
                            <div
                                key={item?._id}
                                className="py-2 border-b-[1px] border-gray-300 grid grid-cols-7 items-center"
                            >
                                <div className="col-span-4 flex items-start gap-2 text-sm">
                                    <Image
                                        src={item?.image}
                                        alt="product image"
                                        width={500}
                                        height={500}
                                        className="w-12 h-12 object-cover pr-3"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-.5">
                                            {item?.title}
                                        </h3>
                                        <p>{item?.description}</p>
                                    </div>
                                </div>
                                <p className="flex items-center justify-center font-semibold">
                                    {item?.quantity}
                                </p>
                                <p className="flex items-center justify-center font-semibold">
                                    <FormattedPrice amount={item?.price} />
                                </p>
                                <p className="flex items-center justify-center font-semibold">
                                    <FormattedPrice amount={item?.price * item.quantity} />
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="py-2 border-b-[1px] border-b-gray-300 text-2xl font-bold">
                        <p>Payment Details</p>
                    </div>
                    <p className="py-2 font-medium">
                        Total Paid{" "}
                        <span className="ml-2 text-xl font-semibold">
                            <FormattedPrice amount={totalAmount} />
                        </span>
                    </p>
                    <button
                        onClick={() => dispatch(resetOrder())}
                        className="mt-5 border-[1px] border-gray-500 py-1 px-4 font-medium rounded-md hover:border-orange-600 cursor-pointer duration-200"
                    >
                        Reset Order
                    </button>
                </div>
            ) : (
                <div className="py-10 bg-white text-black text-3xl text-center">
                    <p className="text-3xl my-4 font-semibold">Nothing To Show</p>
                    <Link href={"/"}>
                        <button className="bg-black text-slate-100 w-60 px-4 h-12 rounded-full text-base font-semibold mt-2 hover:bg-orange-600 duration-300">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            )}
        </>
    )
};

export default OrderDetails;