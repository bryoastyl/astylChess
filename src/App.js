import css from "./App.css";
import Header from './components/Header'
import Viewer from './components/Viewer'
// import ConnectedMovesHistory from "./components/MovesHistory";
// import ConnectedSettings from "./components/Settings";

function App() {
  return (
    <div className={css.container}>
      <Header />
      <Viewer/>
    </div>
  );
}

export default App;
