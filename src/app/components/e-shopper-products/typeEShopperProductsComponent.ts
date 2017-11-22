import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperProductsComponent } from './abstractEShopperProductsComponent';

/*
 * @name E-Shopper products
 * @id c77e86a9-926a-4c7b-99c9-dd41b8547ade
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-products-component',
  templateUrl: './typeEShopperProductsComponent.html',
  styleUrls: ['./typeEShopperProductsComponent.scss']
})
*/
export class TypeEShopperProductsComponent extends AbstractEShopperProductsComponent {

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
