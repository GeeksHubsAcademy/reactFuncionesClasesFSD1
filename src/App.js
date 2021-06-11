
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Characters from './containers/Characters/Characters';
import Episodes from './containers/Episodes/Episodes';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>
          <Route path="/characters" exact component={Characters}/>
          <Route path="/episodes" exact component={Episodes}/>
        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
