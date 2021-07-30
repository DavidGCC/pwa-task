import React from "react";

import "./CheckoutProgressBar.style";

export class Step extends React.PureComponent {
    constructor(props) {
        super(props);
        this.refParent = React.createRef();
        this.refChild = React.createRef();
    }

    componentDidMount() {
        const { offsetLeft, offsetWidth } = this.refParent.current;
        const { isActive, handleProgressChange, step } = this.props;
        if (step === 3 && isActive) {
            handleProgressChange("100%");
        } else if (isActive) {
            handleProgressChange(offsetLeft + offsetWidth / 2);
        }
    }

    componentDidUpdate() {
        const { offsetLeft, offsetWidth } = this.refParent.current;
        const { isActive, handleProgressChange, step } = this.props;
        if (step === 3 && isActive) {
            handleProgressChange("100%");
        } else if (isActive) {
            handleProgressChange(offsetLeft + offsetWidth / 2);
        }
    }

    render(){
        const { isActive, isCompleted, step, displayValue } = this.props;
        return (
            <div className={`step ${isActive && "active"} ${isCompleted && "completed"}`} ref={this.refParent} key={step}>
                <div className="outer-margin">
                    <span className="step-index" ref={this.refChild}>
                        {
                            isCompleted ? <>&#10003;</> : step
                        }
                    </span>
                </div>
                <span className="step-name">{displayValue}</span>
            </div>
        )
    }
}

export default Step;