import "./control.css"
import { useDispatch } from "react-redux";
import { saveKey } from "../../store/gameSlice";
const Control = () => {
    const dispatch = useDispatch();
    const clickUp = ()=>{
        dispatch(saveKey("w"));
    }
    const clickRight = ()=>{
        dispatch(saveKey("d"));
    }
    const clickDown = ()=>{
        dispatch(saveKey("s"));
    }
    const clickLeft = ()=>{
        dispatch(saveKey("a"));
    }

    return (
    <div className="control-wrapper">
        <button className="control_button control_button_up" onClick={clickUp}></button>
        <div className="horizontal__container">
            <button className="control_button control_button_left" onClick={clickLeft}></button>
            <button className="control_button control_button_right" onClick={clickRight}></button>
        </div>
        <button className="control_button control_button_down" onClick={clickDown}></button>
    </div>);
}

export default Control;