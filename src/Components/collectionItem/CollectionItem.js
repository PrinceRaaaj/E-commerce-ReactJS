import React from "react"
import CustomButton from "../customButton/CustomButton"
import "./CollectionItem.scss"
import { connect } from "react-redux"
import actions from "../../redux/actions"

const collectionItem = ({item, addItem}) => {
    return(
        <div className="collectionItem">
            <div className="image" style={{background: `url(${item.imageUrl})`}} />
            <div className="collectionFooter">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(actions.addItem(item))
})

export default connect(null, mapDispatchToProps)(collectionItem)