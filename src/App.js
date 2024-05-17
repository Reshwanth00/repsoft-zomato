import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
