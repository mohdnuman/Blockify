import { MiddleBanner, Navbar, Product,Home} from ".";
import { BrowserRouter as Router,Route,Switch  } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="body-background">
         
          <Switch>
            <Route path='/' component={Home}/>

            <Route path="/product/:productId" component={Product} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
