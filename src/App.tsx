import './App.css';
// @ts-ignore
import ScoreBoard from './components/score-board/score-board';

function App() {
  return (
    <div className="App">
      <div className="table">
        <ScoreBoard />
      </div>
    </div>
  );
}

export default App;
