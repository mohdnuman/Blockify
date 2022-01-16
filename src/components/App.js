import { ProductShow,Home, CreateProduct} from ".";
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
            <Route path="/create" component={CreateProduct} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
