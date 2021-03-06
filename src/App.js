import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import motorcycleIcon from './assets/img/motorcycleIcon.png'; 
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  // ==================================== UI Render ==========================================

  render() {
    return (
      <BrowserRouter>
        <Header logo={motorcycleIcon} />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route
            path="/"
            exact
            render={props => (
              <Home
                {...props}
              />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
