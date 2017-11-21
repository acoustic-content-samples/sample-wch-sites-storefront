import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeEShopperAdCarouselItemComponent } from './../../components/e-shopper-ad-carousel-item/typeEShopperAdCarouselItemComponent';

/*
 * @name eShopperAdCarouselItemLayout
 * @id e-shopper-ad-carousel-item-layout
 */
@LayoutComponent({
    selector: 'e-shopper-ad-carousel-item-layout'
})
@Component({
  selector: 'app-e-shopper-ad-carousel-item-layout-component',
  templateUrl: './eShopperAdCarouselItemLayout.html',
  styleUrls: ['./eShopperAdCarouselItemLayout.scss']
})
export class EShopperAdCarouselItemLayoutComponent extends TypeEShopperAdCarouselItemComponent {

    constructor() {
        super();
    }

}
