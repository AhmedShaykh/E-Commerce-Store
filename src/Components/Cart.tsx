"use client";
import { resetCart } from "@/redux/cartSlice";
import { StateProps } from "../../Types";
import PaymentForm from "./PaymentForm";
import CartItem from "./CartItem";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Cart = () => {

    const { productData } = useSelector((state: StateProps) => state?.cart);

    const dispatch = useDispatch();

    return (
        <Container>
            {productData.length > 0 ? (
                <Container>
                    <h2 className="text-2xl font-semibold mb-2">Cart</h2>

                    <div className="flex flex-col gap-5">
                        <CartItem />

                        <div className="flex items-center justify-end">
                            <button
                                onClick={() => dispatch(resetCart())}
                                className="bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-200"
                            >
                                Reset Cart
                            </button>
                        </div>
                        <PaymentForm />
                    </div>
                </Container>

            ) : (
                <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
                    <p className="text-2xl border-[1px] border-orange-600 p-2 text-center">
                        Your Product Cart Is Currently Empty
                    </p>

                    <Link href={"/"}>
                        <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-orange-600 duration-200">
                            Return To Shop
                        </button>
                    </Link>
                </div>
            )}
        </Container>
    )
};

export default Cart;