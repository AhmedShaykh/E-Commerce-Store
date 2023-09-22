import React from "react";
import Container from "./Container";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {

    // const { data: session } = useSession();

    return (
        <div className="bg-bodyColor h-20 top-0 sticky z-50">
            <Container className="h-full flex items-center gap-x-2   md:gap-x-5 justify-between">
                <Link href="/">
                    <img
                        src="/Logo.webp"
                        alt="Logo"
                        className="xl:w-[90%] xl:h-full lg:w-[80%] lg:h-[90%] w-[70%] h-[80%]"
                    />
                </Link>

                <div className="w-[50%] lg:w-[65%] bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
                    <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
                    <input
                        type="text"
                        placeholder="Search for Products"
                        className="placeholder:text-sm flex-1 mx-2 outline-none"
                    />
                </div>

                <div className="headerDiv cursor-pointer">
                    <AiOutlineUser className="text-2xl" />
                    <p className="text-sm font-semibold">
                        Login/Register
                    </p>
                </div>

                <Link href={"/cart"}>
                    <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
                        <IoMdCart className="text-xl" />
                        <p className="text-sm font-semibold">
                            $0.00
                        </p>
                        <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
                            0
                        </span>
                    </div>
                </Link>
            </Container>
        </div>
    )
};

export default Header;