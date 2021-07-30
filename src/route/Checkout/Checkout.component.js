import ContentWrapper from "Component/ContentWrapper";
import {
    Checkout as SourceCheckout
} from "SourceRoute/Checkout/Checkout.component";
import { 
    BILLING_STEP,
    DETAILS_STEP,
    SHIPPING_STEP    
} from "Route/Checkout/Checkout.config";

import CheckoutProgressBar from "Component/ChekoutProgressBar/CheckoutProgressBar.component";

export class Checkout extends SourceCheckout {
    renderProgressBar() {
        const { checkoutStep } = this.props;
        return <CheckoutProgressBar checkoutStep={checkoutStep} stepMap={this.stepMap} progress={this.progressWidth[checkoutStep]} />
    }

    progressWidth = {
        [SHIPPING_STEP]: "15%",
        [BILLING_STEP]: "46%",
        [DETAILS_STEP]: "100%"
    }


    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                  >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        )
    }
}

export default Checkout;