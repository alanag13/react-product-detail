import React from "react";
import { IImageElement} from "../types/IProductDetail";

export default class PrimaryImage extends React.PureComponent<IImageElement> {
    render () {
        return (
            <div>
                <img src={this.props.image}/>
            </div>
        );
    }
}