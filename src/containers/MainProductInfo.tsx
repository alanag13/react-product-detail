import React from "react"
import IMainProductInfoProps from "../types/IMainProductInfoProps";
import ProductHeading from "../components/ProductHeading";
import PrimaryImage from "../components/PrimaryImage";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import { IImageElement } from "../types/IProductDetail";

export default class MainProductInfo extends React.PureComponent<IMainProductInfoProps, IImageElement> {

    constructor(props: IMainProductInfoProps) {
        super(props);
        this.state = {
            image: props.mainImage.image
        }
        this.setImage = this.setImage.bind(this);
    }

    setImage(imageElem: IImageElement){
        this.setState({image: imageElem.image});
    }

    render(){
        return (
            <div>
                <ProductHeading title={this.props.title}/>
                <PrimaryImage image={this.state.image}/>
                <ImageCarousel images={this.props.alternateImages} onImageSelected={this.setImage}/>
            </div>
        );
    }
}