import React from 'react';

const General=(props)=>{

    const {myArray}=props;

        return(
            <table>
                {myArray.map((element)=>{
                    return <tr key={element.id}>
                        <td>Name:{element.name}</td>
                        <td>Address:{element.address}</td>
                        <td>Email:{element.email}</td>
                        <td>Phone:{element.phone}</td>
                        <td>Description:{element.description}</td>
                    </tr>
                })}
            </table>
        );
};

export default General;