import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

//! import pages here
import Home from './components/pages/Home'
import Shoulders from './components/pages/Shoulders'

function App() {
  return (
      <Switch>
        <Route path="/shoulders"
          component={Shoulders}
        />
        <Route path="/"
          component={Home}
        />
      </Switch>
  );
}

export default withRouter(App);
