import React from "react";
import IImageCarouselProps from "../../types/IImageCarouselProps";

const styles = require('./styles.css');

export default class ImageCarousel extends React.PureComponent<IImageCarouselProps> {
    render () {
        return (
            <div className="center-flex">
                <div className="carousel-ctrl">
                    {this.props.images.map((img, i) => (
                        <div className="inline" key={i}>
                            <img className="carousel-img" src={img.image}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}