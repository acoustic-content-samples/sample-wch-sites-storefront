import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperAdComponent } from './abstractEShopperAdComponent';

/*
 * @name E-Shopper ad
 * @id 23c92986-b470-47f5-b3af-1e4c4770abdc
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-ad-component',
  templateUrl: './typeEShopperAdComponent.html',
  styleUrls: ['./typeEShopperAdComponent.scss']
})
*/
export class TypeEShopperAdComponent extends AbstractEShopperAdComponent {

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
