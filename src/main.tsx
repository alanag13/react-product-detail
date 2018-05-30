import React from "react";
import ReactDOM from "react-dom";
import FeaturedReviews from "./containers/FeaturedReviews/FeaturedReviews";
import ProductHightlights from "./components/ProductHighlights";
import ImageCarousel from "./containers/ImageCarousel/ImageCarousel";
import OfferPrice from "./components/OfferPrice";
import PromotionList from "./components/PromotionList";
import QuantityInput from "./containers/QuantityInput/QuantityInput";
import ProductHeading from "./components/ProductHeading";
import PrimaryImage from "./components/PrimaryImage";
import { getData } from './data/item-data';
import IFeaturedReviewProps from "./types/IFeaturedReviewProps";
import PrimaryActionButtons from "./containers/PrimaryActionButtons";
import SecondaryActionButtons from "./containers/SecondaryActionButtons";
import ReturnsPolicy from "./components/ReturnsPolicy";

require('./styles.css');

const Index = () => {
  //not sure why everything is a single-item array buy this gets what we need
  const data = getData(),
        custReview = data.CustomerReview[0],
        proReview = custReview.Pro[0],
        conReview = custReview.Con[0],
        overallRating = custReview.consolidatedOverallRating,
        numReviews = custReview.totalReviews,
        images = data.Images[0],
        primaryImage = images.PrimaryImage[0],
        altImages = images.AlternateImages,
        offerPrice = data.Offers[0].OfferPrice[0],
        promotions = data.Promotions;

  const featuredReviews: IFeaturedReviewProps = { conReview, proReview, overallRating, numReviews };
  return (
        <div>
          <ProductHeading title={ data.title }/>
          <PrimaryImage { ...primaryImage } />
          <ImageCarousel images={ altImages } />
          <OfferPrice { ...offerPrice } />
          <hr/>
          <PromotionList promotions={ promotions } />
          <hr/>
          <QuantityInput />
          <PrimaryActionButtons />
          <ReturnsPolicy />
          <SecondaryActionButtons />
          <ProductHightlights { ...data.ItemDescription[0] }/>
          <FeaturedReviews { ...featuredReviews }/> 
        </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));