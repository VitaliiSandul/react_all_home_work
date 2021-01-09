import { connect } from "react-redux"
import { addSame } from "./actionCreators/counterActionCreators"

function AddSameButton(props) {
    return (
        <button className="m-2 btn-custom" onClick={() => props.addSame()}>Add same</button>
    )
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        addSame: () => dispatch(addSame())
    }
}

AddSameButton = connect(mapStateToProps,mapDispatchToProps)(AddSameButton)
export default AddSameButton