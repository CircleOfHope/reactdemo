import React from 'react';
import { PageHeader, Table, Grid, Row, Col } from 'react-bootstrap';
import Attachments from '../components/Attachments';
import Tags from '../components/Tags';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(this.props.songs[this.props.songId]);
  }

  render() {
    return (
      <Grid>
        <PageHeader>{this.state.title}</PageHeader>
        <Row>
          <Col md={8}>
            <Table condensed className="table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Title</th>
                  <td>{ this.state.title }</td>
                </tr>
                <tr>
                  <th scope="row">Author</th>
                  <td>{ this.state.author }</td>
                </tr>
                <tr>
                  <th scope="row">Scripture</th>
                  <td>{ this.state.scripture }</td>
                </tr>
                <tr>
                  <th scope="row">Lyrics Excerpt</th>
                  <td>{ this.state.lyrics }</td>
                </tr>
                <tr>
                  <th scope="row">Notes</th>
                  <td>{ this.state.notes }</td>
                </tr>
              </tbody>
            </Table>
            <h3>Links</h3>
            <Attachments attachments={this.state.links} />
          </Col>
          <Col md={4}>
            <Tags tagGroups={this.state.tagGroups} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SongDetail;