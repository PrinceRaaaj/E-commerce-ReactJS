import React from "react"
import "./CustomButton.scss"

const CustomButton = ({children, inverted, google, ...otherProps}) => (
    <button className={`${inverted && "inverted"} ${google && "google-button"} custom-button`} {...otherProps}>
        {children}
    </button>

)



export default CustomButton 