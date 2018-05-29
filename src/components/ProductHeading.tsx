import React from "react";
import IProductHeadingProps from "../types/IProductHeadingProps"

const ProductTitle = (props: IProductHeadingProps) => (
    <div>
        <h1>{props.title}</h1>
    </div>
);

export default ProductTitle;