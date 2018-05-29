import React from "react";
import IActionButtonProps from "../types/IActionButtonProps";
import ActionButtonGroup from "../components/ActionButtonGroup";

const PrimaryActionButtons = () => {
    const buttons: IActionButtonProps[] = [
        { buttonText: "ADD TO REGISTRY", cssClass: "secondary"},
        { buttonText: "ADD TO LIST", cssClass: "secondary"},
        { buttonText: "SHARE", cssClass: "secondary"},
    ];

    return <ActionButtonGroup actionButtons={ buttons }/>;

};

export default PrimaryActionButtons;