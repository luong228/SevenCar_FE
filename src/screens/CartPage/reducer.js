import { action_type as type } from './action'

const initialState = {
    loading: false,
    carts: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETCART.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GETCART.SUCCESS:
            return {
                ...state,
                carts: action.cart,
                loading: false,
            }
        case type.GETCART.ERROR:
            return {
                ...state,
                loading: false,
            }
            case type.UPDATECART.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.UPDATECART.SUCCESS:
            return {
                ...state,
                carts: action.cart,
                loading: false,
            }
        case type.UPDATECART.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
