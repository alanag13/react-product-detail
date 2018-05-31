import React from "react";
import { IFeaturedReview } from "../types/IProductDetail";

const FeaturedReview = (props: IFeaturedReview) =>
    <div className="review">
        {[...Array(5)].map((x, i) =>
                <span className="medium red-text" key={i} dangerouslySetInnerHTML={{__html: (i + 1) <= parseInt(props.overallRating) ? '&#9733;' : '&#9734;' }}></span>
        )}
        <h4>{props.title}</h4>
        <div>
            <p>{props.review}</p>
        </div>
        <div>
            <span><a href="#">{props.screenName}</a></span>&nbsp;<span>{props.datePosted}</span>
        </div>
    </div>;

export default FeaturedReview;
