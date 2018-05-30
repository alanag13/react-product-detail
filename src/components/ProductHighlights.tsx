import React from "react";
import { IItemDescription } from "../types/IProductDetail";

const ProductHighlights = (props: IItemDescription) =>
    <div>
        <h1>product highlights</h1>
        <ul className="muted-text">
            {props.features.map((feat, i) => (
            //I'm doing this as a workaround for the sake of the demo, but there's a potential XSS vulnerability here
            <li dangerouslySetInnerHTML={{__html: feat}} key={i}></li>
            ))}
        </ul>
    </div>;

export default ProductHighlights;