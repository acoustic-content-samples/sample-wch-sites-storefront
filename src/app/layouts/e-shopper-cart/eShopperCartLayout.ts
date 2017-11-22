import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component, OnInit } from '@angular/core';
import { TypeEShopperCartComponent } from './../../components/e-shopper-cart/typeEShopperCartComponent';
import { CartTransactionService } from "../../commerce/services/componentTransaction/cart.transaction.service";
import { AuthenticationTransactionService } from '../../commerce/services/componentTransaction/authentication.transaction.service';

/*
 * @name eShopperCartLayout
 * @id e-shopper-cart-layout
 */
@LayoutComponent({
    selector: 'e-shopper-cart-layout'
})
@Component({
  selector: 'app-e-shopper-cart-layout-component',
  templateUrl: './eShopperCartLayout.html',
  styleUrls: ['./eShopperCartLayout.scss']
})
export class EShopperCartLayoutComponent extends TypeEShopperCartComponent implements OnInit {
	isLoggedIn: boolean = false;
	_cart: any;

    constructor(private cartTransactionService: CartTransactionService, private authService: AuthenticationTransactionService) {
        super();
    }

	get cart(): any {
		return this._cart;
	}

	public initializeCart() {
		this.cartTransactionService.getCart()
			.then(response => {
				this._cart = response.body
			});
	}

	private increaseQuantity( item: any ) {
		let q = parseInt( item.quantity );
		item.quantity = ( ++q ).toString();
		this.cartTransactionService //update to server
			.updateOrderItem( this._cart )
			.then( response => this.initializeCart() );
	}

	private decreaseQuantity( item: any ) {
		let q = parseInt( item.quantity );
		if ( q && q > 1 ) {
			item.quantity = ( --q ).toString();
			this.cartTransactionService //update to server
				.updateOrderItem( this._cart )
				.then( response => this.initializeCart() );
		}
	}

	ngOnInit() {
		this.initializeCart();
		this.isLoggedIn = this.authService.isLoggedIn();
	}
}
