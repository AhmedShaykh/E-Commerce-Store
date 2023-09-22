import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
};

const Container: FC<Props> = ({ children, className }) => {
    return (
        <div className={`${className} max-w-screen-xl mx-auto px-4 xl:px-0 py-10`}>
            {children}
        </div>
    )
};

export default Container;