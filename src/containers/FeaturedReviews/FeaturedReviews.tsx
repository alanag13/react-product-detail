import React from "react";
import IFeaturedReviewProps from "../../types/IFeaturedReviewProps";
import FeaturedReview from "../../components/FeaturedReview";
import FeaturedReviewHeader from "../../components/FeaturedReviewHeader";

require('./styles.css');

const FeaturedReviews = (props: IFeaturedReviewProps) =>
    <section className="reviews-wrapper">
        <div className="reviews-stats space-between-flex">
            <div>
            {[...Array(5)].map((x, i) =>
                <span className="medium red-text" key={i} dangerouslySetInnerHTML={{__html: (i + 1) <= parseInt(props.overallRating) ? '&#9733;' : '&#9734;' }}></span>
            )}
                <strong>overall</strong>
            </div>
            <div><strong>view all {props.numReviews} reviews</strong></div>
        </div>
        <div className="featured-reviews-container">
            <div className="center-flex">
                <div className="featured-review">
                    <FeaturedReviewHeader label="PRO" description="most helpful 4-5 star review"/>
                    <hr/>
                    <FeaturedReview { ... props.proReview } />
                </div>
                <div className="featured-review">
                    <FeaturedReviewHeader label="CON" description="most helpful 1-2 star review"/>
                    <hr/>
                    <FeaturedReview { ... props.conReview } />
                </div>
            </div>
        </div>
    </section>;

export default FeaturedReviews;
