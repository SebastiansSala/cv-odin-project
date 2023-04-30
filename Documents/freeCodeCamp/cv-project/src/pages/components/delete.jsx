import { Component } from "react";


export default class DeleteButton extends Component{
    constructor(props){
        super(props)
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.handleDelete(this.props.id);
    }

    render(){
        return(
            <>
                <button className="rounded bg-red-600 transition hover:translate-y-[-3px] p-1" key={this.props.id} onClick={this.handleDelete}>Delete</button>
            </>
        )
    }
}