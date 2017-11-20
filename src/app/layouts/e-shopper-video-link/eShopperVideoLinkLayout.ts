import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeEShopperVideoLinkComponent } from './../../components/e-shopper-video-link/typeEShopperVideoLinkComponent';

/*
 * @name eShopperVideoLinkLayout
 * @id e-shopper-video-link-layout
 */
@LayoutComponent({
    selector: 'e-shopper-video-link-layout'
})
@Component({
  selector: 'app-e-shopper-video-link-layout-component',
  templateUrl: './eShopperVideoLinkLayout.html'
})
export class EShopperVideoLinkLayoutComponent extends TypeEShopperVideoLinkComponent {

    constructor() {
        super();
    }

}
