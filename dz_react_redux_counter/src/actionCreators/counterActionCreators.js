import {INCREMENT, DECREMENT, RESET, DOUBLED, ADDSAME, SETVALUE, UPDATEVALUE} from '../actions/counterActions'

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const reset = () => ({type: RESET})
export const doubled = () => ({type: DOUBLED})
export const addSame = () => ({type: ADDSAME})
export const setValue = () => ({type: SETVALUE})

export function updateValue(value) {
  return ({
    type: UPDATEVALUE,
    updateVal: value
  });
}
