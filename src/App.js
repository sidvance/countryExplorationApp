import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import {selectDisplay} from "./redux/slices/displayCountrySlice"

function App() {
    let potential = useSelector(selectPotentials);
    console.log(potentials);
    let currentDIsplay = useSelector(selectDisplay)
    console.log('Displaying!!!', currentDIsplay)
    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay />}
        </div>
    );
}

export default App;
