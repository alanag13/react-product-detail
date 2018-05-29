import React from "react";
import { IFeaturedReview } from "../types/IProductDetail";

const Review = (props: IFeaturedReview) =>
    <div>
        <h3>{props.title}</h3>
        <div>
            <p>{props.review}</p>
        </div>
        <div>
            <span><a href="#">{props.screenName}</a></span>&nbsp;<span>{props.datePosted}</span>
        </div>
    </div>;

export default Review;
