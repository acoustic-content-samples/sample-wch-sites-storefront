import {
	LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component, OnInit } from '@angular/core';
import { TypeEShopperContactComponent } from './../../components/e-shopper-contact/typeEShopperContactComponent';

/*
 * @name eShopperContactLayout
 * @id e-shopper-contact-layout
 */
@LayoutComponent({
	selector: 'e-shopper-contact-layout'
})
@Component({
  selector: 'app-e-shopper-contact-layout-component',
  templateUrl: './eShopperContactLayout.html'
})
export class EShopperContactLayoutComponent extends TypeEShopperContactComponent {

	constructor() {
		super();
	}

	encodeURIComponent(str) {
		return encodeURIComponent(str);
	}
}
