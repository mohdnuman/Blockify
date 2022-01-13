import { ProductShow,Home} from ".";
import { BrowserRouter as Router,Route,Switch  } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="body-background">
         
          <Switch>
            <Route exact path='/' component={Home}/>

            <Route path="/product/:address" component={ProductShow} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
