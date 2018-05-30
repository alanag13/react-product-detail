import React from "react";
import IProductHeadingProps from "../../types/IProductHeadingProps";

require("./styles.css");

const ProductHeading = (props: IProductHeadingProps) => (
    <div className="product-title">
        <h2 className="thin-text">{props.title}</h2>
    </div>
);

export default ProductHeading;