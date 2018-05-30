import React from "react";
import IFeaturedReviewHeaderProps from "../types/IFeaturedReviewHeaderProps";

const FeaturedReviewHeader = (props: IFeaturedReviewHeaderProps) =>
    <div>
        <h3 className="thin-text"><strong>{props.label}</strong></h3>
        <span className="muted-text">{props.description}</span>
    </div>;

export default FeaturedReviewHeader;