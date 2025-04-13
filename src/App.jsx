import './App.css'
import { useDispatch } from 'react-redux'

import Board from './components/board/Board';

import { saveKey } from './store/gameSlice';
import StatusButton from './components/status_button/StatusButton';
import Score from './components/score/Score';
function App() {
  const dispatch = useDispatch();
  const keyDownHandler = (e) => {
    console.log(e.key)
    dispatch(saveKey(e.key))
  }

  return(
    <div className='app' onKeyDownCapture={keyDownHandler}>
      <Score></Score>
      <Board></Board>
      <StatusButton></StatusButton>
    </div>
  )
}

export default App
