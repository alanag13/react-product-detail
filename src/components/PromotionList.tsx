import React from "react";
import IPromotionListProps from "../types/IPromotionListProps";

const ProductHighlights = (props: IPromotionListProps) =>
    <div>
            {props.promotions.map((promo, i) => (
            //I'm doing this as a workaround for the sake of the demo, but there's a potential XSS vulnerability here
            <div key={i}><strong>{ promo.Description[0].shortDescription }</strong></div>
            ))}
    </div>;

export default ProductHighlights;