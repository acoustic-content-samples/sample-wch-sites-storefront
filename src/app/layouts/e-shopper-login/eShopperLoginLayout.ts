import {
	LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeEShopperLoginComponent } from './../../components/e-shopper-login/typeEShopperLoginComponent';
import { AuthenticationTransactionService } from '../../commerce/services/componentTransaction/authentication.transaction.service';

/*
 * @name eShopperLoginLayout
 * @id e-shopper-login-layout
 */
@LayoutComponent({
	selector: 'e-shopper-login-layout'
})
@Component({
  selector: 'app-e-shopper-login-layout-component',
  templateUrl: './eShopperLoginLayout.html'
})
export class EShopperLoginLayoutComponent extends TypeEShopperLoginComponent {
	constructor() {
		super();
	}
}
