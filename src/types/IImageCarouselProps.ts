import { IImageElement } from "./IProductDetail";

export default interface IImageCarouselProps {
    images: IImageElement[];
    onImageSelected(imageElem: IImageElement): void;
}