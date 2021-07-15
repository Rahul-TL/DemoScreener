import logo from "./logo.svg";
import "./App.css";
import StockTables from "./Components/StockTables";
import ProfitLossCards from "./Components/ProfiltLossCards";
import Header from './Components/header/header';
import TabsC from './Components/Tabs';
import Intro from './Components/Intro';

function App() {
  return (
    <div className="App">
      <Header/>
      <TabsC/>
      <Intro/>
      <StockTables />
    </div>
  );
}

export default App;
