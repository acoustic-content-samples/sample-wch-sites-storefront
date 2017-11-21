import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeEShopperAdComponent } from './../../components/e-shopper-ad/typeEShopperAdComponent';

/*
 * @name eShopperAdLayout
 * @id e-shopper-ad-layout
 */
@LayoutComponent({
    selector: 'e-shopper-ad-layout'
})
@Component({
  selector: 'app-e-shopper-ad-layout-component',
  templateUrl: './eShopperAdLayout.html'
})
export class EShopperAdLayoutComponent extends TypeEShopperAdComponent {

    constructor() {
        super();
    }

}
