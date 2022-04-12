
export function Mostrador (props){
    return (
        <div>
            <img src ={props.img} alt="exp" />
            <p>{props.children}</p>
        </div>
    )
}