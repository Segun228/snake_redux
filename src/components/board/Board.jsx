import { uid } from "uid";
import Square from "../square/Square";
import "./board.css"

const Board = () => {
    let squares = [];
    for(let y=0; y<10; y++){
        for(let x=0; x<10; x++){
            squares.push({x : x, y : y, index: Math.random()});
        }
    }
    return(
        <div className="board__wrapper">
            {squares.map((square)=>{
                return(<Square square={square} key={uid()}></Square>);
            })}
        </div>
    );
}
export default Board;