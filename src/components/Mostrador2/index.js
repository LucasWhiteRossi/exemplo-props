export function Mostrador2 (props){
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <img src={props.img} alt={props.text}/>
        </div>
    )
}