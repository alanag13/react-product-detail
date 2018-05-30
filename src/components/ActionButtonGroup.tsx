import React from "react";
import IActionButtonGroupProps from "../types/IActionButtonGroupProps";

const ActionButtonGroup = (props: IActionButtonGroupProps) =>
    <div>
        {props.actionButtons.map((btn, i) => (
                        <button className={btn.cssClass} onClick={btn.action} key={i}>{btn.buttonText.toUpperCase()}</button>
        ))}
    </div>




export default ActionButtonGroup;