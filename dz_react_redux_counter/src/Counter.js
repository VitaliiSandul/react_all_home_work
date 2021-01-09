import {connect} from 'react-redux'
import {increment, decrement} from './actionCreators/counterActionCreators'
import ResetButton from './ResetButton'
import DoubleButton from './DoubleButton'
import AddSameButton from './AddSameButton'
import SetValueButton from './SetValueButton'
import UpdateValueInput from './UpdateValueInput'
import { useState } from 'react'

function Counter(props) {

    const [newVal, setNewVal] = useState(0)
    console.log(props)
    return (
        <>
            <div className="counter">
                <h3 className="text-center">Counter: {props.count}</h3>

                <div>
                    <button onClick={() => props.dispatch(increment())} className="m-2 btn-custom">+</button>
                    <button onClick={() => props.dispatch(decrement())} className="m-2 btn-custom">-</button>
                </div>

                <div className="elem elem-center">
                    <ResetButton className="m-2 btn-custom"></ResetButton> 
                </div>

                <div className="elem elem-center">
                    <DoubleButton className="m-2 btn-custom"></DoubleButton>  
                </div>

                <div className="elem elem-center">
                    <AddSameButton className="m-2 btn-custom"></AddSameButton>  
                </div>

                <div className="elem elem-center">
                    <SetValueButton className="m-2 btn-custom"></SetValueButton>  
                    <UpdateValueInput></UpdateValueInput>
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

Counter = connect(mapStateToProps)(Counter)

export default Counter