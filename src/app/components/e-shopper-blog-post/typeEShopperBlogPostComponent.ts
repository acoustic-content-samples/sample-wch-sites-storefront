import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractEShopperBlogPostComponent } from './abstractEShopperBlogPostComponent';

/*
 * @name E-Shopper blog post
 * @id 8f3b9172-8227-46b3-be14-f10c196c9134
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-e-shopper-blog-post-component',
  templateUrl: './typeEShopperBlogPostComponent.html',
  styleUrls: ['./typeEShopperBlogPostComponent.scss']
})
*/
export class TypeEShopperBlogPostComponent extends AbstractEShopperBlogPostComponent {

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
