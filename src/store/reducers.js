const initialState = {
    dorms: []
}

const dorms = (state= initialState, action) => {
    switch (action.type) {
        case 'GET_DORMS':
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

export default dorms