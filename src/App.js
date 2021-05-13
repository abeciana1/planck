import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

//! import pages here
import Home from './components/pages/Home'
import Shoulders from './components/pages/Shoulders'
import RedeemShoulders from './components/pages/RedeemShoulders'
import AboutMatt from './components/pages/AboutMatt'

function App(props) {
  // let route = props.location.pathname.split('/')
  return (
    <Switch>
        <Route path="/about-matt"
          component={AboutMatt}
        />
        <Route path="/shoulders/:id"
          component={RedeemShoulders}
          />
        <Route exact path="/shoulders"
          component={Shoulders}
        />
        <Route exact path="/"
          component={Home}
        />
      </Switch>
  );
}

export default withRouter(App);
