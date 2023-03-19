import React, {Component} from "react";

class Experience extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <table>
                {this.props.myArray.map((element)=>{
                    return <tr key={element.id}>
                        <td>Company Name:{element.companyName}</td><td>Position:{element.position}</td><td>City:{element.expCity}</td>
                        <td>Period:{element.expFrom}-{element.expTo}</td>
                        <td><button className='no-printme' onClick={this.props.onButtonClicked} id={element.id}>Delete</button></td>
                    </tr>
                })}
            </table>
        );
    }
}

export default Experience;