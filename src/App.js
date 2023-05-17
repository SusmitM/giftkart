import "./App.css";

import {Navigation} from "./Components";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Navigation/>


      <AppRoutes/>
    </div>
  );
}

export default App;
