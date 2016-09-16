import React from 'react';
import { Label } from 'react-bootstrap'

class Tags extends React.Component {

  render() {
    return (
      <div>
        {this.props.tagGroups.map(function(tagGroup, i){
          return (
          <div key={i}>
            <h4>{tagGroup.name}</h4>
            {tagGroup.tags.map(function(tag, j){
              return (<Label key={j}>{tag}</Label>);
            }, this)}
          </div>
          );
        }, this)}
      </div>
    );
  }
}
Tags.defaultProps = { tagGroups: [] }

export default Tags;