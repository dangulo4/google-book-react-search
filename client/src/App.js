import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';
import Nav from './Components/Navbar';
import Col from './Components/Col';
import Search from './pages/Search';
import Saved from './pages/Saved';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <Router>
            <Col size="md-12">
              <Nav />
              <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/saved" component={Saved} />
              </Switch>
            </Col>
          </Router>
          <Col size="md-12"></Col>
        </div>
      </Wrapper>
    );
  }
}
export default App;
