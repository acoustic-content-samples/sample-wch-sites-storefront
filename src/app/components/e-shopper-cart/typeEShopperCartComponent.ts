import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperCartComponent } from './abstractEShopperCartComponent';

/*
 * @name E-Shopper cart
 * @id d929f7b1-7b95-4e1a-9efd-631112ad92ea
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-cart-component',
  templateUrl: './typeEShopperCartComponent.html',
  styleUrls: ['./typeEShopperCartComponent.scss']
})
*/
export class TypeEShopperCartComponent extends AbstractEShopperCartComponent {

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
