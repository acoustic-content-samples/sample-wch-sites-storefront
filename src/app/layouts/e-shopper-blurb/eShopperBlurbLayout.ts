import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeEShopperBlurbComponent } from './../../components/e-shopper-blurb/typeEShopperBlurbComponent';

/*
 * @name eShopperBlurbLayout
 * @id e-shopper-blurb-layout
 */
@LayoutComponent({
    selector: 'e-shopper-blurb-layout'
})
@Component({
  selector: 'app-e-shopper-blurb-layout-component',
  templateUrl: './eShopperBlurbLayout.html'
})
export class EShopperBlurbLayoutComponent extends TypeEShopperBlurbComponent {

    constructor() {
        super();
    }

}
