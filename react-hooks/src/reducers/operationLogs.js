import {
    ADD_OPREATION_LOG,
    DELETE_ALL_OPREATION_LOGS
} from '../actions';

const operationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPREATION_LOG:
            const operationLog = {
                description: action.description,
                opreatedAt: action.opreatedAt
            } 
            return [operationLog, ...state]
        case DELETE_ALL_OPREATION_LOGS:
            return []
        default:
            return state 
    }
}

export default operationLogs;