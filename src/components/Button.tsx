import type { ButtonProps } from "../types/types";

const Button: React.FC<ButtonProps> = ({ type = "button", children, ...props }) => {
    return(
        <button type = {type} {...props}>
            { children }
        </button>
    )
}

export default Button;