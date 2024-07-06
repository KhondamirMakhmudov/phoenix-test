import React from "react";


const Button = ({children, classnames}) => {
    return (
        <button className={`roboto uppercase py-[7px] px-[21px] border text-white border-white 	backdrop-blur ${classnames} rounded-[4px]`}>
            {children}
        </button>
    )
}

export default Button;