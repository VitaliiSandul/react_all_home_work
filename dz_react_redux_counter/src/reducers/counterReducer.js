import { DECREMENT, INCREMENT, RESET, DOUBLED, ADDSAME, SETVALUE, UPDATEVALUE } from "../actions/counterActions"

function counterReducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return {count: state.count + 1}
        case DECREMENT:
            return {count: state.count - 1}
        case RESET:
            return {count: 0}
        case DOUBLED:
            return {count: state.count * 2}
        case ADDSAME:
            return {count: parseInt((state.count.toString(10) + state.count.toString(10)), 10)}
        case SETVALUE:
            return {count: state.value}
        case UPDATEVALUE:
            return {count: state.count, value: parseInt(action.updateVal, 10)}
        default:
            return state
    }
}


export default counterReducer