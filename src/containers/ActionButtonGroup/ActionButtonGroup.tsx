import React from "react";
import IActionButtonGroupProps from "../../types/IActionButtonGroupProps";

require('./styles.css');

const ActionButtonGroup = (props: IActionButtonGroupProps) =>
    <div className="btn-group-container space-between-flex">
        {props.actionButtons.map((btn, i) => (
                        <button className={"btn " + btn.cssClass} onClick={btn.action} key={i}>{btn.buttonText.toUpperCase()}</button>
        ))}
    </div>




export default ActionButtonGroup;