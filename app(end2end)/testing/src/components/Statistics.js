import Statistic from './Statistic.js'

const Statistics = (props) => {

    let {good, neutral, bad} = props

    return (
        <div>
            <h1>Statistics</h1>
            {good || neutral || bad ?
            <div>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="all" value={props.all}/>
                <Statistic text="average" value={props.average}/>
                <div>
                    <Statistic text="positive" value={props.positive}/><b>%</b>
                </div>
            </div>
            :
                <h4>No feedback given</h4>
            }  
        </div>
    )
}

export default Statistics