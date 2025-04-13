import { useSelector } from "react-redux";
import "./square.css"
import snake_head from "./../../assets/snake_head.png";
const Square = ({square}) => {
    const {x, y} = square;
    const snake = useSelector(store => store.game.snake);
    const apple = useSelector(store => store.game.apple);
    const direction = useSelector(store => store.game.direction)
    const snakeHead = useSelector(store => store.game.snakeHead)
    let buttonStyle = '';

    for (let s of snake){
        if(s.x===x && s.y===y) buttonStyle = 'snake'
    }

    if(x===apple.x && apple.y===y) buttonStyle = 'apple'

    if(x===snakeHead.x && snakeHead.y===y){
        switch(direction){
            case 'd':
                buttonStyle = "snake-head-right";
                break;
            case 'в':
                buttonStyle = "snake-head-right";
                break;
            case 'ArrowRight':
                buttonStyle = "snake-head-right";
                break;
            case 's':
                buttonStyle = "snake-head-down";
                break;
            case 'ы':
                buttonStyle = "snake-head-down";
                break;
            case 'ArrowDown':
                buttonStyle = "snake-head-down";
                break;
            case 'ф':
                buttonStyle = "snake-head-left";
                break;
            case 'ArrowLeft':
                buttonStyle = "snake-head-left";
                break;
            case 'a':
                buttonStyle = "snake-head-left";
                break;
            case 'w':
                buttonStyle = "snake-head-up";
                break;
            case 'ц':
                buttonStyle = "snake-head-up";
                break;
            case 'ArrowUp':
                buttonStyle = "snake-head-up";
                break;
            default:
                break;
        }
    }

    return ( 
    <>
    <span className="square_unit">
        <div className={buttonStyle}></div>
    </span>
    </> );
}
export default Square;