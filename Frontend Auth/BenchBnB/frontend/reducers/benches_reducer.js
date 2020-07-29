import { 
    RECEIVE_BENCHES,
    RECEIVE_BENCH 
} from './../actions/bench_actions';

const benchReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_BENCHES:
            return Object.assign({}, state, action.benches)
        case RECEIVE_BENCH:
            const newBench = { [action.bench.id]: action.bench }
            return Object.assign({}, state, newBench);
        default:
            return state;

    }
}

export default benchesReducer;