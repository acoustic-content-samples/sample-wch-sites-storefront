import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperCheckoutComponent } from './abstractEShopperCheckoutComponent';

/*
 * @name E-Shopper checkout
 * @id 98faa920-6c28-4669-9af1-4a24b4704ff4
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-checkout-component',
  templateUrl: './typeEShopperCheckoutComponent.html',
  styleUrls: ['./typeEShopperCheckoutComponent.scss']
})
*/
export class TypeEShopperCheckoutComponent extends AbstractEShopperCheckoutComponent {

    /*
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
     */

    constructor() {
        super();
        /*
         * TODO initialize your custom fields here, note that
         * you can refer to the values bound via @RenderingContextBinding from
         * your super class.
         *
         * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
         */
    }

}
