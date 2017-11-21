import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperAdCarouselItemComponent } from './abstractEShopperAdCarouselItemComponent';

/*
 * @name E-Shopper ad carousel item
 * @id 54b1ff0e-d7a2-4476-bda3-e8c8d400db09
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-ad-carousel-item-component',
  templateUrl: './typeEShopperAdCarouselItemComponent.html',
  styleUrls: ['./typeEShopperAdCarouselItemComponent.scss']
})
*/
export class TypeEShopperAdCarouselItemComponent extends AbstractEShopperAdCarouselItemComponent {

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
