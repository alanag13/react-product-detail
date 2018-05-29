import React from "react";
import IImageCarouselProps from "../types/IImageCarouselProps";

export default class ImageCarousel extends React.PureComponent<IImageCarouselProps> {
    render () {
        return (
            <div>
                {this.props.images.map((img, i) => (
                    <img src={img.image} key={i}/>
                ))}
            </div>
        );
    }
}