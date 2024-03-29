import React from "react";
import ProductHeading from "../../components/ProductHeading/ProductHeading";
import PrimaryImage from "../../components/PrimaryImage/PrimaryImage";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { IImageElement } from "../../types/IProductDetail";
import IMainProductInfoProps from "../../types/IMainProductInfoProps";

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
                <ImageCarousel images={this.props.alternateImages} imagePxWidth={60} numImagesShown={3} onImageSelected={this.setImage}/>
            </section>
        );
    }
}