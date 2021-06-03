import React from 'react'

function Card(props) {
  
    return (
       <>
        <div className="card_cont">
            <div className="card_title">
                {props.value === "INDIA"? <><small>{props.name}</small>
                <h2>{props.value}</h2> </> : <> <h2> {props.name} </h2>
                 <h1> {props.value} </h1> </>}
               
            </div>
            <div className="card_body">
                
            </div>
        </div>
       </>
    )
}

export default Card;
