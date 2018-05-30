import { IImageElement } from "./IProductDetail";

export default interface IMainProductInfoProps {
    mainImage: IImageElement;
    alternateImages: IImageElement[];
    title: string;
};
