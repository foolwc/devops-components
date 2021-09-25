import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps&React.BaseHTMLAttributes<HTMLElement>

const Button: React.FC<NativeButtonProps> = (props) => {
    const { children, disabled, className, href, size, btnType, ...restProps } = props;
    const classes = classNames('devops-btn', className, {
        [`devops-btn-${btnType}`]: btnType,
        [`devops-btn-${size}`]: size,
        'disabled': disabled
    })

    return (
        <button
            className={classes}
            disabled={disabled}
            {...restProps}
        >
            <span>{children}</span>
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button
