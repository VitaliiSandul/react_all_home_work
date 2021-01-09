import { connect } from "react-redux"
import { setValue } from "./actionCreators/counterActionCreators"

function SetValueButton(props) {
    return (
        <button onClick={() => props.setValue()} className="m-2 btn-custom">New Val</button>
    )
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        setValue: () => dispatch(setValue())
    }
}

SetValueButton = connect(mapStateToProps,mapDispatchToProps)(SetValueButton)
export default SetValueButton