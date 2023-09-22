import { authOptions } from "@/lib/auth";
import Container from "./Container";
import SignOut from "./SignOut";
import Login from "./Login";
import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import { getServerSession } from "next-auth";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
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
            </Container>
        </div>
    )
};

export default Header;