import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.GETSHOWROOM.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETSHOWROOM.SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case type.GETSHOWROOM.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
