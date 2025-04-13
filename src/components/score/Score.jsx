import { useSelector } from "react-redux";
import "./score.css"
const Score = () => {
    const currentScore = useSelector(store => store.game.score);
    return( 
        <div className="score__wrapper">Score: <span className="score__title">{currentScore}</span></div>
    );
}

export default Score;