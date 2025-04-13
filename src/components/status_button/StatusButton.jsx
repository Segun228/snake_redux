import "./statusButton.css"
import { useRef } from "react";
import { moveSnake, setDirection, checkApple, checkGameOver, changeStatus, newGame } from "../../store/gameSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";


const StatusButton = () => {
    let timer = useRef(null);
    const dispatch = useDispatch();
    let gameSpeed = useSelector(state => state.game.gameSpeed)
    const update = () => {
        dispatch(moveSnake());
        dispatch(setDirection());
        dispatch(checkApple());
        dispatch(checkGameOver());
    };
    const startTimer = ()=> timer.current = setInterval(() => update(), 300/gameSpeed)
    const stopTimer = () => clearInterval(timer.current);
    
    const status = useSelector(store => store.game.status);

    const spaceHandler = (e) => {
        if(e.key == "Space"){
            dispatch(changeStatus())
        }
    }

    const clickHandler = () => {
        if(status==='Restart'){
            dispatch(newGame());
            stopTimer();
            return;
        }
        if(status !== "Pause"){startTimer()}
        else{stopTimer()}
        dispatch(changeStatus());
    }
    
    return (
    <div className="Status__wrapper">
        <button className="start__button" onKeyDownCapture={spaceHandler} onClick={clickHandler}>{status}</button>
    </div>);
}
export default StatusButton;