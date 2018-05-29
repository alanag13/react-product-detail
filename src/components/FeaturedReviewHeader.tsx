import React from "react";
import IFeaturedReviewHeaderProps from "../types/IFeaturedReviewHeaderProps";

const FeaturedReviewHeader = (props: IFeaturedReviewHeaderProps) =>
    <div className="grow">
        <h2>{props.label}</h2>
        <span>{props.description}</span>
    </div>;

export default FeaturedReviewHeader;