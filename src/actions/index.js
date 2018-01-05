import axios from 'axios';


const url = "https://ga-dashboard-api.herokuapp.com/dashboard?from=2017/11/04&to=2017/12/04";

const DASH_BOARD_ACTION = 'DASH_BOARD_ACTION';

export function dashBoardAction() {

    const response = axios.get(url);
    console.log("Action : " + response);
    return {
        type: DASH_BOARD_ACTION,
        payload: response
    }

}

export default DASH_BOARD_ACTION;