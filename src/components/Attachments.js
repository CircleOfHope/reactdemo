import React from 'react';
import { Table } from 'react-bootstrap';

class Attachments extends React.Component
{
  displayLink(link) {
   return link.split("://")[1].split("/")[0];
  }

  render() {
    return (
      <Table condensed className="table-borderless">
        <tbody>
        {this.props.attachments.map(function(attachment, i){
          return (
            <tr key={i}>
              <td>{ attachment.name }</td>
              <td>{ this.displayLink(attachment.url) }</td>
              <td><a href={ attachment.url } target="_blank">View</a></td> 
            </tr>
          )
        }, this)}
        </tbody>
      </Table>
    )
  }
}
Attachments.defaultProps = { attachments: [] }

export default Attachments