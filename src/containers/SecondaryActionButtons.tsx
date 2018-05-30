import React from "react";
import IActionButtonProps from "../types/IActionButtonProps";
import ActionButtonGroup from "./ActionButtonGroup/ActionButtonGroup";

const PrimaryActionButtons = () => {
    const buttons: IActionButtonProps[] = [
        { buttonText: "ADD TO REGISTRY", cssClass: "btn-secondary"},
        { buttonText: "ADD TO LIST", cssClass: "btn-secondary"},
        { buttonText: "SHARE", cssClass: "btn-secondary"},
    ];

    return <ActionButtonGroup actionButtons={ buttons }/>;

};

export default PrimaryActionButtons;