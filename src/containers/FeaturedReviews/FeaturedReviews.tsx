import React from "react";
import IFeaturedReviewProps from "../../types/IFeaturedReviewProps";
import Review from "../../components/Review";
import FeaturedReviewHeader from "../../components/FeaturedReviewHeader";

require('./styles.css');

const FeaturedReviews = (props: IFeaturedReviewProps) =>
    <div>
        <div className="reviews-stats space-between-flex">
            <div><strong>overall</strong></div>
            <div><strong>view all {props.numReviews} reviews</strong></div>
        </div>
        <div className="featured-reviews-container">
            <div className="center-flex">
                <div className="featured-review">
                    <FeaturedReviewHeader label="PRO" description="most helpful 4-5 star review"/>
                    <hr/>
                    <Review { ... props.proReview } />
                </div>
                <div className="featured-review">
                    <FeaturedReviewHeader label="CON" description="most helpful 1-2 star review"/>
                    <hr/>
                    <Review { ... props.conReview } />
                </div>
            </div>
        </div>
    </div>;

export default FeaturedReviews;
