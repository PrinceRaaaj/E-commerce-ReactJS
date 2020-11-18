import React from "react"
import "./MenuItem.scss"
import {withRouter} from "react-router-dom"

const MenuItem = ({section, history, match}) => {
    
    return (
    <div className={`menu-item ${section.size}`} onClick={() => history.push(`${section.linkUrl}`)}>
        <div className="background-image" style={{backgroundImage: `url(${section.imageUrl})`}} />
        <div className="content">
            <h1 className="title">{section.title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)}

export default withRouter(MenuItem)