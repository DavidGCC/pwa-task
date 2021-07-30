import React from "react";
import { 
    BILLING_STEP,
    DETAILS_STEP,
    SHIPPING_STEP    
} from "Route/Checkout/Checkout.config";

import "./CheckoutProgressBar.style"

export class CheckoutProgressBar extends React.PureComponent {
    constructor(props){
        super(props);
        this.renderSteps = this.renderSteps.bind(this);
    }

    stepIndex = {
        [SHIPPING_STEP]: 1,
        [BILLING_STEP]: 2,
        [DETAILS_STEP]: 3
    }

    renderSteps(stepEntry, index) {
        const [key, value] = stepEntry;
        const { checkoutStep } = this.props;
        const isCompleted = this.stepIndex[checkoutStep] > this.stepIndex[key] || checkoutStep === DETAILS_STEP;
        return (
            <div className={`step ${checkoutStep === key && "active"} ${isCompleted && "completed"}`}>
                <div className="outer-margin">
                    <span className="step-index">
                        {
                            isCompleted ? <>&#10003;</> : index + 1
                        }
                    </span>
                </div>
                <span className="step-name">{value.title}</span>
            </div>
        )
    }

    render() {
        const { stepMap, progress } = this.props;
        const stepMapEntries = Object.entries(stepMap);
        return (
            <div className="Progress-bar">
                <div className="bar"></div>
                <div className="bar-completed" style={{ width: this.props.progress }}></div>
                { stepMapEntries.map(this.renderSteps) }
            </div>
        )
    }
}

export default CheckoutProgressBar;