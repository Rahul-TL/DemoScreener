import logo from "./logo.svg";
import "./App.css";
import StockTables from "./components/StockTables";
import ProfitLossCards from "./components/ProfiltLossCards";
import Header from './components/header/header';
import TabsC from './components/Tabs';
import Intro from './components/Intro';

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
