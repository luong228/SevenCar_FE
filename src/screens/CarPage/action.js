export const action_type = {
    GETLISTCAR: {
        REQUEST: "GETLISTCAR.REQUEST",
        SUCCESS: "GETLISTCAR.SUCCESS",
        ERROR: "GETLISTCAR.ERROR"
    },
    FILTER: {
        REQUEST: "CARFILTER.REQUEST",
        SUCCESS: "CARFILTER.SUCCESS",
        ERROR: "CARFILTER.ERROR"
    },
    ADDCARTOWISHLIST: {
        REQUEST: "ADDCARTOWISHLIST.REQUEST",
        SUCCESS: "ADDCARTOWISHLIST.SUCCESS",
        ERROR: "ADDCARTOWISHLIST.ERROR"
    },
    SEARCH: {
        REQUEST: "SEARCHCAR.REQUEST",
        SUCCESS: "SEARCHCAR.SUCCESS",
        ERROR: "SEARCHCAR.ERROR"
    },
}

export function getListCar (params)
{
    return {
        type: action_type.GETLISTCAR.REQUEST,
        params,
    }
}

export function filter (params)
{
    return {
        type: action_type.FILTER.REQUEST,
        params,
    }
}

export function addCarToWishlist (data)
{
    return {
        type: action_type.ADDCARTOWISHLIST.REQUEST,
        data,
    }
}

export function search (data)
{
    return {
        type: action_type.SEARCH.REQUEST,
        data,
    }
}