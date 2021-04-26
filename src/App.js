import './App.css';
import ChessBoard from 'chessboardjsx'
import Chess from 'chess.js'
const container = {
  marginTop: '2rem', 
  display: 'flex', 
  justifyContent: 'space-around', 
  alignItem: 'center', 
}
function App() {
  return (
    <div className="App" style={container}>
      <ChessBoard position='start'/>
    </div>
  );
}

export default App;
