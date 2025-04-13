import { useSelector } from "react-redux";
import "./score.css"



const Score = () => {
    const currentScore = useSelector(store => store.game.score);
    const currentStatus = useSelector(store => store.game.status);

    const caption = (currentStatus)=>{
        if(currentStatus === "Restart"){
            return "Game Over";
        }
        else{
            return(
                <>
                    Score: <span className="score__title">{currentScore}</span>
                </>
            );
        }

    }
    return( 
        <div className="score__wrapper">{caption(currentStatus)}</div>
    );
}

export default Score;