import React, { FC } from "react";

interface Amount {
    amount: number;
};

const FormattedPrice: FC<Amount> = ({ amount }) => {

    const formattedAmount = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    });

    return <span>{formattedAmount}</span>;
};

export default FormattedPrice;