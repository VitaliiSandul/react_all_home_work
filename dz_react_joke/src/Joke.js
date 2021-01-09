import React from "react"
import './index.css';

function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}><span className="blue">Основная часть шутки:</span> {props.question}</h3>
            <h3><span className="red">Ключевая фраза:</span> {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke