import "./control.css"
const Control = () => {
    return (
    <div className="control-wrapper">
        <button className="control_button control_button_up"></button>
        <div className="horizontal__container">
            <button className="control_button control_button_left"></button>
            <button className="control_button control_button_right"></button>
        </div>
        <button className="control_button control_button_down"></button>
    </div>);
}

export default Control;