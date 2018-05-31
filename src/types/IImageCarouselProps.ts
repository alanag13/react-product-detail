import { IImageElement } from "./IProductDetail";

export default interface IImageCarouselProps {
    images: IImageElement[];
    imagePxWidth: number;
    numImagesShown: number;
    onImageSelected(imageElem: IImageElement): void;
}