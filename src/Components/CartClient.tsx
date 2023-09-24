"use client";
import { useEffect, useState } from "react";
import { ProductsType, StateProps } from "../../Types";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import FormattedPrice from "./FormattedPrice";

const CartClient = () => {

    const [totalAmt, setTotalAmt] = useState<number>(0);

    // const dispatch = useDispatch();

    const { productData, orderData } = useSelector(
        (state: StateProps) => state.cart
    );

    useEffect(() => {

        let amt = 0;

        productData.map((item: ProductsType) => {

            amt += item.price * item.quantity;

            return;
        });

        setTotalAmt(amt);

    }, [productData]);

    return (
        <Link href={"/cart"}>
            <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
                <IoMdCart className="text-xl" />

                <p className="text-sm font-semibold">
                    <FormattedPrice amount={totalAmt ? totalAmt : 0} />
                </p>

                <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
                    {productData ? productData?.length : 0}
                </span>
            </div>
        </Link>
    )
};

export default CartClient;