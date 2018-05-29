import React from "react";
import IFeaturedReviewHeaderProps from "../types/IFeaturedReviewHeaderProps";

const FeaturedReviewHeader = (props: IFeaturedReviewHeaderProps) =>
    <div>
        <h2>{props.label}</h2>
        <p>{props.description}</p>
    </div>;

export default FeaturedReviewHeader;