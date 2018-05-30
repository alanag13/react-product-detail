import React from "react";
import IActionButtonProps from "../types/IActionButtonProps";
import ActionButtonGroup from "./ActionButtonGroup/ActionButtonGroup";

const PrimaryActionButtons = () => {
    const buttons: IActionButtonProps[] = [
        { buttonText: "PICK UP IN STORE", cssClass: "btn-primary btn-black"},
        { buttonText: "ADD TO CART", cssClass: "btn-primary primary btn-red"},
    ];

    return <ActionButtonGroup actionButtons={ buttons }/>;

};

export default PrimaryActionButtons;