import React from 'react';
import '../../css/browse_tasks/TaskCardContentDetails_Header__SidePanel.css'



const SidePanel = props => {



  return (

    <div class="payment_panel__Wrapper-ots126-0 hpWFks">
    <div class="payment_panel__TitleWrapper-ots126-1 bYkcIZ">Task Budget</div>
    <div class="payment_panel__PriceWrapper-ots126-2 dArxuO">
      <div class="payment_panel__TaskPriceWrapper-ots126-5 ceFDqT">
        <div class="task-price">
          <div class="currency-symbol">
            <div class="price text-h2"><span data-ui-test="task-price">$65</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="payment_panel__AddFundsWrapper-ots126-3 knxrjg"></div>
    <div class="payment_panel__CtaWrapper-ots126-4 dUABLd">
      <div data-ui-test="task-details-payment-panel"><button data-ui-test="button-cta"
          class="button-med full-width action-type button-cta button-make-offer" id="core-button" type="button">Make an
          offer</button></div>
    </div>
  </div>

  )
}

export default SidePanel;