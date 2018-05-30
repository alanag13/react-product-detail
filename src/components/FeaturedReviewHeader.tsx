import React from "react";
import IFeaturedReviewHeaderProps from "../types/IFeaturedReviewHeaderProps";

const FeaturedReviewHeader = (props: IFeaturedReviewHeaderProps) =>
    <div>
        <h2>{props.label}</h2>
        <span className="muted-text">{props.description}</span>
    </div>;

export default FeaturedReviewHeader;