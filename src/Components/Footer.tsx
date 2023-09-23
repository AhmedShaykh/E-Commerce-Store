import React from "react";
import Payment from "../../public/assets/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Image from "next/image";
import {
    BsYoutube,
    BsGithub,
    BsLinkedin,
    BsFacebook,
    BsTwitter
} from "react-icons/bs";

const Footer = () => {
    return (
        <div className="w-full bg-darkText text-slate-100">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8">
                <div className="flex flex-col gap-y-4">
                    <Logo />

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
                        sint incidunt, minima quos voluptates, nobis autem laborum earum est
                        pariatur aperiam. Delectus consectetur maxime quidem veniam,
                        corporis.
                    </p>

                    <div className="flex items-center gap-x-4">
                        <a href="" target="_blank">
                            <span
                                className="bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-red-600 hover:text-white cursor-pointer duration-200"
                            >
                                <BsYoutube />
                            </span>
                        </a>
                        <a href="" target="_blank">
                            <span
                                className="bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-black hover:text-white cursor-pointer duration-200"
                            >
                                <BsGithub />
                            </span>
                        </a>
                        <a href="" target="_blank">
                            <span
                                className="bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-cyan-700 hover:text-white cursor-pointer duration-200"
                            >
                                <BsLinkedin />
                            </span>
                        </a>
                        <a href="" target="_blank">
                            <span
                                className="bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-blue-800 hover:text-white cursor-pointer duration-200"
                            >
                                <BsFacebook />
                            </span>
                        </a>
                        <a href="" target="_blank">
                            <span
                                className="bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-black hover:text-blue-800 cursor-pointer duration-200"
                            >
                                <BsTwitter />
                            </span>
                        </a>
                    </div>
                </div>

                <div>
                    <p className="text-lg">Laset posts</p>
                    <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
                        <li className="flex flex-col">
                            <span className="text-slate hover:text-cyan-600 cursor-pointer duration-200">
                                Where Music Is Headed Next
                            </span>
                            <span className="text-green-500">January 31, 2022</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-slate hover:text-cyan-600 cursor-pointer duration-200">
                                Where Music Is Headed Next
                            </span>
                            <span className="text-green-500">January 31, 2022</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-slate hover:text-cyan-600 cursor-pointer duration-200">
                                Where Music Is Headed Next
                            </span>
                            <span className="text-green-500">January 31, 2022</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-slate hover:text-cyan-600 cursor-pointer duration-200">
                                Where Music Is Headed Next
                            </span>
                            <span className="text-green-500">January 31, 2022</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-lg mb-2">Pay Us With Your Trusted Services</p>
                    <Image
                        src={Payment}
                        alt="payment banner image"
                        className="w-full h-10 object-fill"
                    />
                </div>
            </Container>
        </div>
    )
};

export default Footer;