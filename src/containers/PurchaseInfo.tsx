
import React from "react";
import IPurchaseInfoProps from "../types/IPurchaseInfoProps";
import OfferPrice from "../components/OfferPrice";
import PromotionList from "../components/PromotionList";
import QuantityInput from "../components/QuantityInput/QuantityInput";
import PrimaryActionButtons from "../containers/PrimaryActionButtons";

const PurchaseInfo = (props: IPurchaseInfoProps) =>
    <section className="flex-cell purchase-info">
        <OfferPrice { ...props.offerPrice } />
        <hr/>
        <PromotionList promotions={ props.promotions } />
        <hr/>
        <QuantityInput />
        <PrimaryActionButtons />
    </section>;

export default PurchaseInfo;