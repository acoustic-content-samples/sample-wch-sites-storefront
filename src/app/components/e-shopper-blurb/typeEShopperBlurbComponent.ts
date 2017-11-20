import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperBlurbComponent } from './abstractEShopperBlurbComponent';

/*
 * @name E-Shopper blurb
 * @id 9bd965ca-0e14-44fc-89a4-ad7ff080c9ab
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-blurb-component',
  templateUrl: './typeEShopperBlurbComponent.html',
  styleUrls: ['./typeEShopperBlurbComponent.scss']
})
*/
export class TypeEShopperBlurbComponent extends AbstractEShopperBlurbComponent {

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
