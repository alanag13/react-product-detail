import React from "react";
import IImageCarouselProps from "../../types/IImageCarouselProps";
import { IImageElement } from "../../types/IProductDetail";

const styles = require('./styles.css');

export default class ImageCarousel extends React.PureComponent<IImageCarouselProps> {

    constructor(props: IImageCarouselProps) {
        super(props); 
        this.state = {
            selectedImage: null
        }   
    }

    render () {
        return (
            <div className="center-flex">
                <div className="carousel-ctrl">
                    {this.props.images.map((img, i) => (
                        <div className="inline" key={i} onClick={ () => this.props.onImageSelected(img)}>
                            <img className="carousel-img" src={img.image}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}