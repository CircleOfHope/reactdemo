import React from 'react';
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';
import SongDetail from './views/SongDetail';
import './App.css';
import songData from './data/songs';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
            <Grid fluid>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">CircleMusic</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem className="active" role="presentation" href="#">First Item</NavItem>
                        <NavItem role="presentation" href="#">Second Item</NavItem>
                        <NavItem role="presentation" href="#">Third Item</NavItem>
                        <NavItem role="presentation" href="#">Link</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Grid>
        </Navbar>
        <SongDetail songs={songData} songId={6} />
      </div>
    );
  }
}

export default App;
