import React from "react";
import IFeaturedReviewProps from "../types/IFeaturedReviewProps";
import Review from "../components/Review";
import FeaturedReviewHeader from "../components/FeaturedReviewHeader";

const FeaturedReviews = (props: IFeaturedReviewProps) =>
    <div>
        <div>
            <div><strong>overall</strong></div>
            <div><strong>view all {props.numReviews} reviews</strong></div>
        </div>
        <div>
            <div>
                <FeaturedReviewHeader label="PRO" description="most helpful 4-5 star review"/>
                <FeaturedReviewHeader label="CON" description="most helpful 1-2 star review"/>
            </div>
            <hr />
            <div>
                <Review { ... props.proReview } />
                <Review { ... props.conReview } />
            </div>
        </div>
    </div>;

export default FeaturedReviews;
