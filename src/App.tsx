import * as React from 'react';
import './App.css';
import SingnIn from './Components/SignIn';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={SingnIn}/>
      </Router>
    );
  }
}

export default App;
