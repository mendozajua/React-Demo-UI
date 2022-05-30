import PropTypes from "prop-types";
import './Button'
import Button from "./Button";

interface Ititle {
    title: string;
    onAdd: Function;
    showAdd: boolean;
}

const Header = (props: Ititle) => {


    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color={props.showAdd ? 'red' : "green"}
                    text={props.showAdd ? "Close" : "Add"}
                    onClick={props.onAdd}/>
        </header>
    )
}

export default Header