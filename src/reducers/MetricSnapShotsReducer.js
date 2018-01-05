import DASH_BOARD_ACTION from '../actions/index';

const metricSnapShotReducer = function (state = null, action) {

    console.dir("metricSnapShotReducer started : " + action.type + "  payload:" + action.payload);
    switch (action.type) {
        case DASH_BOARD_ACTION: {
            console.dir("Action:Payload: " + action.payload.data);
            state = action.payload.data;
            return state;
        }
        default: return state;
    }

}
export default metricSnapShotReducer;


