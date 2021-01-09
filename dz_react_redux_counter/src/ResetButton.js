import { connect } from "react-redux"
import { reset } from "./actionCreators/counterActionCreators"

function ResetButton(props) {
    return (
        <button className="m-2 btn-custom" onClick={() => props.reset()}>Reset</button>
    )
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        reset: () => dispatch(reset())
    }
}

ResetButton = connect(mapStateToProps,mapDispatchToProps)(ResetButton)
export default ResetButton