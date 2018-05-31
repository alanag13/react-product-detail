import React from "react";
import { IItemDescription } from "../types/IProductDetail";
import SecondaryActionButtons from "../containers/SecondaryActionButtons";
import ReturnsPolicy from "../components/ReturnsPolicy";
import ProductHightlights from "../components/ProductHighlights";

const GeneralInfo = (props: IItemDescription) =>
    <section className="flex-cell general-info">
        <ReturnsPolicy />
        <SecondaryActionButtons />
        <ProductHightlights { ...props }/>
    </section>;

export default GeneralInfo;