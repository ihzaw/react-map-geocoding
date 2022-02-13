import "./App.css";
import { Home } from "./views/Homepage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_DARK_MODE } from "./store/actionType";
import { setDarkMode } from "./store/actionCreator";

function App() {
  const darkMode = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      dispatch(setDarkMode(true))
    } else {
      dispatch(setDarkMode(false))
    }
  })
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Home/>
    </div>
  );
}

export default App;
