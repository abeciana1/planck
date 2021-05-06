import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

//! import pages here
import Home from './components/Home'

function App() {
  return (
    <Switch>
      <Route path="/"
        component={Home}
      />
    </Switch>
  );
}

export default withRouter(App);
