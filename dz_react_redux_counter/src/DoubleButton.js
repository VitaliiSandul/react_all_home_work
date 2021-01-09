import { connect } from "react-redux"
import { doubled } from "./actionCreators/counterActionCreators"

function DoubleButton(props) {
    return (
        <button className="m-2 btn-custom" onClick={() => props.doubled()}>Doubled</button>
    )
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        doubled: () => dispatch(doubled())
    }
}

DoubleButton = connect(mapStateToProps,mapDispatchToProps)(DoubleButton)
export default DoubleButton