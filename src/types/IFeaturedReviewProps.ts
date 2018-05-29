import { IFeaturedReview } from "./IProductDetail"

export default interface IFeaturedReviewProps {
    proReview: IFeaturedReview;
    conReview: IFeaturedReview;
    overallRating: string;
    numReviews: string;
}