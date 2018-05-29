import React from "react";
import IProductHeadingProps from "../types/IProductHeadingProps"

const ProductTitle = (props: IProductHeadingProps) => (
    <div>
        <h2>{props.title}</h2>
    </div>
);

export default ProductTitle;