import { MiddleBanner, Navbar } from ".";

import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div id="body-background">
//           <Navbar />
//           <MiddleBanner />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
function App() {
  return (
    <div className="App" >
      <div id="body-background">
        <Navbar />
        <MiddleBanner/>

      </div>
    </div>
  );
}

export default App;
