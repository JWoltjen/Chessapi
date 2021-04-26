import './App.css';
import ChessBoard from 'chessboardjsx'
import React, {useState, useRef, useEffect} from 'react'
import Chess from 'chess.js'

const container = {
  marginTop: '2rem', 
  display: 'flex', 
  justifyContent: 'space-around', 
  alignItem: 'center', 
}
function App() {
  const [fen, setFen] = useState('start')

  let game = useRef(null); 

  useEffect(() => {
    game.current = new Chess(); 
  }, [])

  const onDrop = ({sourceSquare, targetSquare}) => {
    let move = game.current.move({
      from: sourceSquare, 
      to: targetSquare
    })
    if(move === null) return; 

    setFen(game.current.fen())
  }

  return (
    <div className="App" style={container}>
      {
        game.current && game.current.game_over() ? <div style={
          {textAlign: 'center'}
        }><h1>Game Over</h1></div>: <span></span>
      }
      <ChessBoard 
          position={fen}
          onDrop={onDrop}
          />
    </div>
  );
}

export default App;
