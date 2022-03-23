import css from "./App.css";
import ConnectBoard from "./components/Board";
// import ConnectedMovesHistory from "./components/MovesHistory";
// import ConnectedSettings from "./components/Settings";

function App() {
  return (
    <div className={css.container}>
      <ConnectBoard />
    </div>
  );
}

export default App;
