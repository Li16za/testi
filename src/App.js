import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/Home';
import Film from './component/film';

const App = () => (
  <Router>
    <div>
      <div>
        <Route exact path="/" component={Home} />
		<Route exact path="/bron/:id" component={Film} />
      </div>
    </div>
  </Router>
);

export default App;