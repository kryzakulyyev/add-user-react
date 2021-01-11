import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    return (
        <tbody >
          {props.name.map(name=>{
            return (<tr>
               <td >{name.name}</td>
               <td>{name.job}</td>
            </tr>)
          })}
        </tbody>
      )
}

class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody name={this.props.users} />
        </table>
      )
    }
  }

export default Table;