import {
    TOTAL_JOB,
    GET_ID,
} from '../../actions/job';

const initialState = {
    totalJob: 0,
    idJob:'',
};

export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case TOTAL_JOB:
            return Object.assign({}, state, {
                totalJob: action.totalJob,
            });
        case GET_ID:
            return Object.assign({}, state, {
                idJob: action.idJob,
            });
        default:
            return state;
    }
}
