import React from "react";
import IImageCarouselProps from "../../types/IImageCarouselProps";
import { IImageElement } from "../../types/IProductDetail";

require('./styles.css');
const arrowLeft = require('./arrow-left.png');
const arrowRight = require('./arrow-left.png');

export default class ImageCarousel extends React.PureComponent<IImageCarouselProps, any> {

    constructor(props: IImageCarouselProps) {
        super(props); 
        this.state = {
            selectedImage: null,
            displayedGroup: 0
        }

        this.prevGroup = this.prevGroup.bind(this);
        this.nextGroup = this.nextGroup.bind(this);
    }

    displayGroup(groupNumber: number){
        const count = this.props.images.length;
        const numberOfGroups = Math.ceil(count / this.props.numImagesShown);

        if(groupNumber >= 0 && groupNumber <= numberOfGroups - 1){
            this.setState((prev: any) => ({ displayedGroup: groupNumber}))
        }
    }

    isCurrentDisplayedGroupOrGreater(index: number): boolean {
        const beginRange = (this.state.displayedGroup * this.props.numImagesShown);
        return beginRange <= index;
    }

    nextGroup(){
        this.displayGroup(this.state.displayedGroup + 1);
    }

    prevGroup(){
        this.displayGroup(this.state.displayedGroup - 1);
    }

    render () {
        return (
            <div className="center-flex">
                <div className="carousel-btn carousel-prev" onClick={this.prevGroup}>
                    {/* <img src={arrowLeft} /> */}
                </div>
                <div className="carousel-ctrl">
                    {this.props.images.map((img, i) => (
                        <div className="inline carousel-img" key={i} onClick={ () => this.props.onImageSelected(img)}
                         style={{transform: 'translateX(' + (this.isCurrentDisplayedGroupOrGreater(i) ? 0 : '-' + this.state.displayedGroup * this.props.imagePxWidth * this.props.numImagesShown) + 'px)',
                                position: ( this.isCurrentDisplayedGroupOrGreater(i)) ? "relative" : "absolute" }}>

                            <img width={this.props.imagePxWidth + "px"}  src={img.image}/>
                        </div>
                    ))}
                </div>
                <div className="carousel-btn carousel-next" onClick={this.nextGroup}>
                </div>
            </div>
        );
    }
}