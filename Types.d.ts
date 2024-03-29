export interface ProductsType {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    quantity: number;
};

export interface ItemProps {
    item: ProductsType;
};

export interface StateProps {
    cart: {
        length: ReactNode;
        productData: [];
        userInfo: {};
        orderData: {
            order: ProductsType[];
        };
    };
}