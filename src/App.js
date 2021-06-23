import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

function App() {
  return (
    <div className="App">
      <h1>Checklist App</h1>
      <Login />
      <Register />
    </div>
  );
}

export default App;
