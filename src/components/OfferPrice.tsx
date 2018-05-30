import React from "react";
import { IOfferPrice } from "../types/IProductDetail";

const OfferPrice = (props: IOfferPrice) =>
    <div>
        <span className="big"><strong>{props.formattedPriceValue}</strong></span>&nbsp;
        <span>{props.priceQualifier.toLowerCase()}</span>
    </div>;

export default OfferPrice;