import React from "react";
import classes from "./Input.module.scss";

const Input = React.forwardRef((props,ref) => {
    return <div className="uk-grid uk-child-width-auto uk-grid-small uk-flex-middle uk-margin-small">
        <div>
            <label htmlFor={props.input.id} className={classes.label}>{props.label}</label>
        </div>
        <div>
            <input ref={ref} className="uk-input uk-form-width-xsmall uk-form-small" {...props.input}/>
        </div>
    </div>
});
export default Input;