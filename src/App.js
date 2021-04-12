//import './App.css';
import EveryDay from './everyDay';
import Search from './search';
import WeatherHeader from './weatherHeader';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">Weathera
             </header>
        {/* <Search city={props.city}/> */}
             <EveryDay/>
     <WeatherHeader/>
            
            
             </div>
  );
}

export default App;
