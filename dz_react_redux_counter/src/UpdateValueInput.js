import { connect } from "react-redux"
import { updateValue } from "./actionCreators/counterActionCreators"

function UpdateValueInput(props) {
    return (
        <input className="m-2" placeholder="Type value"
               onChange={(event) => props.updateValue(event.target.value)} />
    )
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        updateValue: (val) => dispatch(updateValue(val))
    }
}

UpdateValueInput = connect(mapStateToProps,mapDispatchToProps)(UpdateValueInput)
export default UpdateValueInput