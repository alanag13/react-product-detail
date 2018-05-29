import React from "react";
import { IOfferPrice } from "../types/IProductDetail";

const OfferPrice = (props: IOfferPrice) =>
    <div>
        <strong><span>{props.formattedPriceValue}</span></strong>&nbsp;
        <span>{props.priceQualifier.toLowerCase()}</span>
    </div>;

export default OfferPrice;