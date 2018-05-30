import React from "react";
import { IImageElement} from "../../types/IProductDetail";

require("./styles.css");

export default class PrimaryImage extends React.PureComponent<IImageElement, IImageElement> {

    constructor(props: IImageElement) {
        super(props);
        
    }

    render () {
        return (
            <div className="primary-image">
                <img src={this.props.image}/>
            </div>
        );
    }
}