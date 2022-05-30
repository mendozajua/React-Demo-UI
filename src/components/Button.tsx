interface Ibtn{
    color:string,
    text:string
    onClick:any
}

const Button = (props:Ibtn) =>{

    return(
        <button onClick={props.onClick} style={{backgroundColor:props.color}}className='btn'>{props.text}</button>
    )
}

export default Button