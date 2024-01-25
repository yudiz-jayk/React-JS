export default function Dice(props) {

    const style = {
        backgroundColor:'red'
    }

    return (
        <div className="dice" onClick={() => {
            props.holdDiceFunction(props.id)
        }}>
            <h2 color={props.isHold ? style:""}> {props.number}</h2>
        </div>

    )
}

