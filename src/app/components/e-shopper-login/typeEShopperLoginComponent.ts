import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperLoginComponent } from './abstractEShopperLoginComponent';

/*
 * @name E-Shopper login
 * @id 2e44f20c-16fd-44ae-8a12-3c981c6234aa
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-login-component',
  templateUrl: './typeEShopperLoginComponent.html',
  styleUrls: ['./typeEShopperLoginComponent.scss']
})
*/
export class TypeEShopperLoginComponent extends AbstractEShopperLoginComponent {

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
