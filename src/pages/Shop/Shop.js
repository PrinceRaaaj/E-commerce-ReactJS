import React from "react"
import SHOP_DATA from "./ShopData"
import PreviewCollection from "../../Components/PreviewCollection/PreviewCollection"

class Shop extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return <div className="shopPage">
            {
                collections.map(collection => (<PreviewCollection key={collection.id} collection={collection} />))
            }
        </div>
    }
}

export default Shop