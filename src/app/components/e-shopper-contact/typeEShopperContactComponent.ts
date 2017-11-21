import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperContactComponent } from './abstractEShopperContactComponent';

/*
 * @name E-Shopper contact
 * @id bb6e9a2b-1a87-41b7-a6d0-8d2037554c3e
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-contact-component',
  templateUrl: './typeEShopperContactComponent.html',
  styleUrls: ['./typeEShopperContactComponent.scss']
})
*/
export class TypeEShopperContactComponent extends AbstractEShopperContactComponent {

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
