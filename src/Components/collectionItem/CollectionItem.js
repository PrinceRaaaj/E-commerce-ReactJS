import React from "react"
import "./CollectionItem.scss"

const collectionItem = ({item}) => {
    return(
        <div className="collectionItem">
        <div className="image" style={{background: `url(${item.imageUrl})`}} />
        <div className="collectionFooter">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
        </div>
    </div>
    )
    
}

export default collectionItem