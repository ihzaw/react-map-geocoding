import { Nav } from "../components/NavigationBar"

export const Home = ({ darkMode, setDarkMode }) => {
    return (
        <div>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
            <div>{darkMode ? "dark" : "light"}</div>
        </div>
    )
}