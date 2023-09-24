import SessionClient from "./SessionClient";
import { authOptions } from "@/lib/auth";
import CartClient from "./CartClient";
import Container from "./Container";
import Logo from "./Logo";
import { getServerSession } from "next-auth/next";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Header = async () => {

    const session = await getServerSession(authOptions);

    return (
        <div className="bg-bodyColor h-20 top-0 sticky z-50">
            <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
                <Link href="/">
                    <Logo />
                </Link>

                <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
                    <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />

                    <input
                        className="placeholder:text-sm flex-1 outline-none"
                        placeholder="Search for Products"
                        type="text"
                    />
                </div>

                <CartClient />

                <SessionClient session={session} />

            </Container>
        </div>
    )
};

export default Header;