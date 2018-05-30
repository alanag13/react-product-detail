import React from "react";
import IMainProductInfoProps from "../../types/IMainProductInfoProps";
import ProductHeading from "../../components/ProductHeading/ProductHeading";
import PrimaryImage from "../../components/PrimaryImage/PrimaryImage";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { IImageElement } from "../../types/IProductDetail";

require("./styles.css");

export default class MainProductInfo extends React.PureComponent<IMainProductInfoProps, IImageElement> {

    constructor(props: IMainProductInfoProps) {
        super(props);
        this.state = {
            image: props.mainImage.image
        };
        this.setImage = this.setImage.bind(this);
    }

    setImage(imageElem: IImageElement){
        this.setState({image: imageElem.image});
    }

    render(){
        return (
            <section className="main-product-info">
                <ProductHeading title={this.props.title}/>
                <PrimaryImage image={this.state.image}/>
                <ImageCarousel images={this.props.alternateImages} onImageSelected={this.setImage}/>
            </section>
        );
    }
}