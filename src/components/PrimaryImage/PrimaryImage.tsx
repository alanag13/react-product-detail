import React from "react";
import { IImageElement} from "../../types/IProductDetail";

require("./styles.css");

const PrimaryImage = (props: IImageElement) =>
        <div className="primary-image">
            <img src={props.image}/>
        </div>;

export default PrimaryImage;