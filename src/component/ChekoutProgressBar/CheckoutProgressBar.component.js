import React from "react";
import { 
    BILLING_STEP,
    DETAILS_STEP,
    SHIPPING_STEP    
} from "Route/Checkout/Checkout.config";


import Step from "./Step.component";
import "./CheckoutProgressBar.style"


export class CheckoutProgressBar extends React.PureComponent {
    constructor(props){
        super(props);
        this.renderSteps = this.renderSteps.bind(this);
        this.ref = React.createRef();
        this.state = { progress: "0%" }
        this.handleProgressChange = this.handleProgressChange.bind(this);
    }

    stepIndex = {
        [SHIPPING_STEP]: { displayValue: "Shipping", step: 1 },
        [BILLING_STEP]: { displayValue: "Review & Payments", step: 2 },
        [DETAILS_STEP]: { displayValue: "Order Details", step: 3 }
    }

    renderSteps(key) {
        const { 
            displayValue,
            step 
        } = this.stepIndex[key];
        const { checkoutStep } = this.props;
        const isCompleted = this.stepIndex[checkoutStep].step > step
            || checkoutStep === DETAILS_STEP;
        const isActive = checkoutStep === key;

        return (
            <Step isCompleted={isCompleted} 
                isActive={isActive} 
                displayValue={displayValue} 
                step={step} 
                handleProgressChange={this.handleProgressChange} 
            />
        )
    }

    handleProgressChange(val) {
        this.setState({ progress: val });
    }

    render() {
        const { stepMap } = this.props;
        const stepMapKeys = Object.keys(stepMap);
        
        return (
            <div className="Progress-bar">
                <div className="bar"></div>
                <div className="bar-completed" style={{ width: this.state.progress }}></div>
                { stepMapKeys.map(this.renderSteps) }
            </div>
        )
    }
}

export default CheckoutProgressBar;