import React from "react"
import "./PreviewCollection.scss"
import CollectionItem from "../collectionItem/CollectionItem"

const PreviewCollection = ({collection}) => {
    return <div className="previewCollection">
        <h1 className="title">{collection.title.toUpperCase()}</h1>
        <div className="preview">
            {
                collection.items
                .filter((items, index) => index < 4)
                .map(item => <CollectionItem key={ item.id } item={item} /> )
            }
        </div>

    </div>
}

export default PreviewCollection