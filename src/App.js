import './App.css';
import Greeting from './components/Greeting/Greeting';
import Leaderboard from './components/LeaderBoard/LeaderBoard';

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Playground</h1>
      </header>
      <Leaderboard />
      <Greeting key={key} />
      <button onClick={() => setKey(makeKey)}>
        Reset Greeting.js Component
      </button>
    </>
  );
}

export default App;
