
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={AwardParameterInput} />
      </div>
    </Router>
  );
}

export default App;
