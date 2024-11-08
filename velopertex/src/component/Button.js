import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ childeren, size, color, outline, fullWidth, ...rest }) {
    return (
        <button className={classNames("Button", size, color, { outline, fullWidth })} 
                {...rest}>
            {childeren}
        </button>
    );
}

Button.defaultProps = {
    size: "medium",
    color: "blue",
};

export default Button;
