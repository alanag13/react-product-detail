import React from "react";
import IPromotionListProps from "../types/IPromotionListProps";

const ProductHighlights = (props: IPromotionListProps) =>
    <div>
            {props.promotions.map((promo, i) => (
            <div className="medium red-text" key={i}>{ promo.Description[0].shortDescription }</div>
            ))}
    </div>;

export default ProductHighlights;