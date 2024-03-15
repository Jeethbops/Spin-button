import React from "react";


class TableRow extends React.Component{
    render(){
        return(
            <tr onClick={()=>{this.props.changeActive(this.props.index)}}  
            className={`data-row ${this.props.index == this.props.activeUser ? "active": ""}`}>
                              <td className="column1">{this.props.id}</td>
                              <td className="column2">{this.props.firstName}</td>
                              <td className="column3">{this.props.lastName}</td>
                              <td className="column4">{this.props.email}</td>
                              <td className="column5">{this.props.phoneNo}</td>
                          </tr>
        )
    }
}

export default TableRow;