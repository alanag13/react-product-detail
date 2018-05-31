import React from "react";
import IActionButtonProps from "../types/IActionButtonProps";
import IPrimaryActionButtonsProps from "../types/IPrimaryActionButtonsProps";
import ActionButtonGroup from "./ActionButtonGroup/ActionButtonGroup";

const PrimaryActionButtons = (props: IPrimaryActionButtonsProps) => {
    const buttons: IActionButtonProps[] = [];
    if (props.purchaseCode === "0" || props.purchaseCode === "1"){
        buttons.push({ buttonText: "ADD TO CART", cssClass: "btn-primary primary btn-red"});
    }

    if (props.purchaseCode === "0" || props.purchaseCode === "2"){
        buttons.push({ buttonText: "PICK UP IN STORE", cssClass: "btn-primary btn-black"});
    }

    return <ActionButtonGroup actionButtons={ buttons }/>;

};

export default PrimaryActionButtons;