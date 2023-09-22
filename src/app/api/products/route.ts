import { productData } from "@/constants/data";
import { NextResponse } from "next/server";

export const GET = async () => {

    try {

        return NextResponse.json({
            message: "Products Fetched Successfully...",
            success: true,
            productData
        });

    } catch (error) {

        return NextResponse.json(
            { message: "Product Loading Error" }, { status: 500 }
        );

    }

};