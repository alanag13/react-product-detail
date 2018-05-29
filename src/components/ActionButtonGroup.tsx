import React from "react";
import IActionButtonGroupProps from "../types/IActionButtonGroupProps";

const ActionButtonGroup = (props: IActionButtonGroupProps) =>
    <div className="center-flex">
        {props.actionButtons.map((btn, i) => (
                        <button className={btn.cssClass + " grow"} onClick={btn.action} key={i}>{btn.buttonText.toUpperCase()}</button>
        ))}
    </div>




export default ActionButtonGroup;