import React from "react";
import { IImageElement} from "../types/IProductDetail";

export default class PrimaryImage extends React.PureComponent<IImageElement, IImageElement> {

    constructor(props: IImageElement) {
        super(props);
        
    }

    render () {
        return (
            <div>
                <img src={this.props.image}/>
            </div>
        );
    }
}