import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import Home from './components/Home'
import ProjectCodeName from './components/ProjectCodeName'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
      <div> 
          <div> 
                  <ul>
                      <li>
                          <Link to="/">home</Link>
                      </li>
                      <li>
                          <Link to="/project-code-names">Click me to see some projecto code names</Link>
                      </li>
                  </ul>     
          </div>

          <div> 
              <Route exact path="/" component={Home} />
              <Route path="/project-code-names" component={ProjectCodeName} />
          </div>
          
      
      </div>
  </Router> 
)

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;