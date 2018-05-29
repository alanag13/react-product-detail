import React from "react";
import IActionButtonGroupProps from "../types/IActionButtonGroupProps";

const ActionButtonGroup = (props: IActionButtonGroupProps) =>
    <div>
        {props.actionButtons.map((btn, i) => (
                    <div key={i}>
                        <button className={btn.cssClass} onClick={btn.action} >{btn.buttonText.toUpperCase()}</button>
                    </div>
        ))}
    </div>




export default ActionButtonGroup;