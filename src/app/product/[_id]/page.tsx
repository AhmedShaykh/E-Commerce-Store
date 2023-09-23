import React, { FC } from "react";
import { getSingleProudct, getTrendingProducts } from "@/helpers";
import SingleProduct from "@/Components/SingleProduct";
import ProductsData from "@/Components/ProductsData";
import NotFoundPage from "./not-found";
import { ProductsType } from "../../../../Types";
import Container from "@/Components/Container";

type Param = {
    params: {
        _id: string;
    };
};

const Product: FC<Param> = async ({ params }) => {

    const { _id } = params;

    const id = Number(_id);

    const product = getSingleProudct(id);

    if (!product?._id) {
        return <NotFoundPage />;
    }

    const data = await getTrendingProducts();

    return (
        <Container>
            <SingleProduct product={product} />

            <div>
                <p className="text-3xl my-5 text-center font-bold">Trending Products</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {data?.map((item: ProductsType) => (
                        <ProductsData key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </Container>
    )
};

export default Product;