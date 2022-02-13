import "./App.css";
import { Home } from "./views/Homepage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
