import React from 'react'
import Part from './Part'

const Content = ({parts}) => {

    const data = (item) => {
        return item.exercises
    }

    const suma = (prev, next) => {
        return prev + next
    }

    const total = parts.map(data).reduce(suma)

    return(
        <div>
            {parts.map((part) => {
                return(
                    <Part key={part.id} part={part} />
                )
            })}
            <br/>
            <h5>La suma entre todos los ejercicios es: {total}</h5>
        </div>
    )
}

export default Content