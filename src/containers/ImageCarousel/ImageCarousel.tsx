import React from "react";
import IImageCarouselProps from "../../types/IImageCarouselProps";
import { IImageElement } from "../../types/IProductDetail";

const styles = require('./styles.css');

export default class ImageCarousel extends React.PureComponent<IImageCarouselProps, any> {

    constructor(props: IImageCarouselProps) {
        super(props); 
        this.state = {
            selectedImage: null,
            displayedGroup: 0
        }   
    }

    displayGroup(groupNumber: number){
        this.setState((prev: any) => ({ displayedGroup: groupNumber}))
    }

    isCurrentDisplayedGroupOrGreater(index: number): boolean {
        // const count = this.props.images.length;
        // const numberOfGroups = Math.ceil(count / this.props.numImagesShown);
        const beginRange = (this.state.displayedGroup * this.props.numImagesShown);

        return beginRange <= index;
    }

    render () {
        return (
            <div className="center-flex">
                <div className="carousel-ctrl">
                    {this.props.images.map((img, i) => (
                        <div className="inline" key={i} onClick={ () => this.props.onImageSelected(img)} style={{transform: 'translateX(' + (this.isCurrentDisplayedGroupOrGreater(i) ? 0 : '-' + this.state.displayedGroup * this.props.imagePxWidth * this.props.numImagesShown) + 'px)',
                        position: ( this.isCurrentDisplayedGroupOrGreater(i)) ? "relative" : "absolute" }}>
                            <img className="carousel-img" width={this.props.imagePxWidth + "px"}  src={img.image}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}