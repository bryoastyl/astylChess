import css from "./App.css";
import Header from './components/Header'
import {useState} from 'react'
import RouteRender from './components/RouteRender'

// import ConnectedMovesHistory from "./components/MovesHistory";
// import ConnectedSettings from "./components/Settings";

function App() {
  const [route,setroute] = useState("")
  return (
      <div className={css.container}>
        <Header setRoute={setroute} />
        <RouteRender Route={route} />
      </div>

  );
}

export default App;
