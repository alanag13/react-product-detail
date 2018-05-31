import { IOfferPrice, IPromotion } from "./IProductDetail"
import IPromotionListProps from "./IPromotionListProps";

export default interface IPurchaseInfoProps {
    offerPrice: IOfferPrice;
    promotions: IPromotion[];
    purchaseCode: string;
};
