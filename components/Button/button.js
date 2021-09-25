var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
export var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Danger"] = "danger";
})(ButtonType || (ButtonType = {}));
var Button = function (props) {
    var _a;
    var children = props.children, disabled = props.disabled, className = props.className, href = props.href, size = props.size, btnType = props.btnType, restProps = __rest(props, ["children", "disabled", "className", "href", "size", "btnType"]);
    var classes = classNames('devops-btn', className, (_a = {},
        _a["devops-btn-" + btnType] = btnType,
        _a["devops-btn-" + size] = size,
        _a['disabled'] = disabled,
        _a));
    return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps),
        React.createElement("span", null, children)));
};
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
};
export default Button;
