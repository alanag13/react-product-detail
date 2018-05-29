import React from "react";
import IActionButtonProps from "../types/IActionButtonProps";
import ActionButtonGroup from "../components/ActionButtonGroup";

const PrimaryActionButtons = () => {
    const buttons: IActionButtonProps[] = [
        { buttonText: "PICK UP IN STORE", cssClass: "primary black"},
        { buttonText: "ADD TO CART", cssClass: "primary red"},
    ];

    return <ActionButtonGroup actionButtons={ buttons }/>;

};

export default PrimaryActionButtons;