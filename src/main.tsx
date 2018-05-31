import React from "react";
import ReactDOM from "react-dom";
import FeaturedReviews from "./containers/FeaturedReviews/FeaturedReviews";
import { getData } from './data/item-data';
import IFeaturedReviewProps from "./types/IFeaturedReviewProps";
import IPurchaseInfoProps from "./types/IPurchaseInfoProps";
import MainProductInfo from "./containers/MainProductInfo/MainProductInfo";
import IMainProductInfoProps from "./types/IMainProductInfoProps";
import GeneralInfo from "./containers/GeneralInfo";
import PurchaseInfo from "./containers/PurchaseInfo";

require('./styles.css');

const Index = () => {
  //not sure why everything is a single-item array but this gets what we need
  //if this was the real deal this where we would make an asyc call out to our API.
  const data = getData(),
        title = data.title,
        images = data.Images[0],
        mainImage = images.PrimaryImage[0],
        alternateImages = images.AlternateImages,
        custReview = data.CustomerReview[0],
        proReview = custReview.Pro[0],
        conReview = custReview.Con[0],
        overallRating = custReview.consolidatedOverallRating,
        numReviews = custReview.totalReviews,
        offerPrice = data.Offers[0].OfferPrice[0],
        promotions = data.Promotions,
        purchaseCode = data.purchasingChannelCode;

  const mainProductInfo: IMainProductInfoProps = {title, mainImage, alternateImages };
  const purchaseInfo: IPurchaseInfoProps = {offerPrice,promotions,purchaseCode};
  const featuredReviews: IFeaturedReviewProps = { conReview, proReview, overallRating, numReviews };
  return (
        <div className="flex-root">
          <MainProductInfo { ...mainProductInfo } />
          <PurchaseInfo {... purchaseInfo} />
          {/* this div gets real tall on desktop in order to force a flex column wrap*/}
          <div className="flex-cell column-wrap-break"></div>
          <GeneralInfo { ...data.ItemDescription[0] }/>
          <FeaturedReviews { ...featuredReviews }/> 
        </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));