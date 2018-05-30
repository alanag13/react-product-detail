import React from "react";
import IProductHeadingProps from "../types/IProductHeadingProps"

const ProductHeading = (props: IProductHeadingProps) => (
    <div>
        <h2 className="thin-text">{props.title}</h2>
    </div>
);

export default ProductHeading;