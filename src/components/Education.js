import React, {Component} from 'react';

class Education extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <table>
                {this.props.myArray.map((element)=>{
                    return <tr key={element.id}>
                        <td>University:{element.university}</td><td>Degree:{element.degree}</td><td>City:{element.eduCity}</td>
                        <td>Period:{element.eduFrom}-{element.eduTo}</td>
                        <td><button className='no-printme' onClick={this.props.onButtonClicked} id={element.id}>Delete</button></td>
                    </tr>
                })}
            </table>
        );
    }
}

export default Education;