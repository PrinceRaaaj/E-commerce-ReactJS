import actionTypes from "./actionTypes"

const actions = {
    setCurrentUser : user => ({
        type: actionTypes.SET_CURRENT_USER,
        payload: user
    }),
    toggleCartHidden: () => ({
        type: actionTypes.TOGGLE_CART_HIDDEN
    })
}

export default actions