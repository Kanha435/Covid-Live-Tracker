import React from 'react'

function Today(props) {
    return (
        <>
            <div className="today card_cont">
                <h1>Today</h1>
                <h3> Confirmed : {props.confirm} </h3>
                <h3> Deaths :{props.death}</h3>
                <h3> Covered : {props.covered}</h3>
            </div>
        </>
    )
}

export default Today
