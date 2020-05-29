import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './Components/Wrapper';
import Col from './Components/Col';
import Search from './pages/Search';
import Saved from './pages/Saved';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Col size="md-12">
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </Col>
        </Router>

        <Col size="md-12"></Col>
      </Wrapper>
    );
  }
}
export default App;
