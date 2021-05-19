import React from 'react'

const Part = ({part}) => {
    return(
        <div>
            <h4>{part.name}</h4>
            <p>{part.exercises}</p>
        </div>
    )
} 

export default Part