import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperVideoLinkComponent } from './abstractEShopperVideoLinkComponent';

/*
 * @name E-Shopper video link
 * @id 76afdb21-c226-44f9-b110-ee011cf66ecb
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-video-link-component',
  templateUrl: './typeEShopperVideoLinkComponent.html',
  styleUrls: ['./typeEShopperVideoLinkComponent.scss']
})
*/
export class TypeEShopperVideoLinkComponent extends AbstractEShopperVideoLinkComponent {

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
