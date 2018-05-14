import * as React from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn.Container';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/RootReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={SignIn} />
        </Router>
      </Provider>
    );
  }
}

export default App;
