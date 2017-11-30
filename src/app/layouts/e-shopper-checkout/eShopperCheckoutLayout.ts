import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TypeEShopperCheckoutComponent } from './../../components/e-shopper-checkout/typeEShopperCheckoutComponent';
import { GuestShippingBillingComponent } from '../../commerce/guestShippingBilling/guestShippingBilling.component';
import { AuthenticationTransactionService } from '../../commerce/services/componentTransaction/authentication.transaction.service';
import { CheckoutTransactionService } from "../../commerce/services/componentTransaction/checkout.transaction.service";

/*
 * @name eShopperCheckoutLayout
 * @id e-shopper-checkout-layout
 */
@LayoutComponent({
    selector: 'e-shopper-checkout-layout'
})
@Component({
  selector: 'app-e-shopper-checkout-layout-component',
  templateUrl: './eShopperCheckoutLayout.html',
  styleUrls: ['./eShopperCheckoutLayout.scss']
})
export class EShopperCheckoutLayoutComponent extends TypeEShopperCheckoutComponent implements OnInit {
    private _cart: any;
    private _checkout: any;

    isGuest : boolean;
    currentPage : string;
	errorTime : string = null;

    constructor(
        private checkoutTransactionService: CheckoutTransactionService,
        private authenticationTransactionService : AuthenticationTransactionService,
        private route: Router
    ) {
        super();
    }

    ngOnInit() {
        this.initializeCheckoutObject();
        this.initializeCart();
        this.isGuest = !this.authenticationTransactionService.isLoggedIn();
    }

    initializeCart() {
        this.checkoutTransactionService.getCart()
            .then( response => {
                this.cart = response.body;
            } );
    }

    initializeCheckoutObject() {
        let checkout: any = {
            'isGuestCheckout': false,
            'step': 1,
            'address': {
                country: "Canada",
                state: "Ontario",
                addressLine: []
            }
        }
        this.checkout = checkout;
    }

    set checkout( checkout: any ) {
        this._checkout = checkout;
    }
    get checkout(): any {
        return this._checkout;
    }

    set cart( cart: any ) {
        this.checkoutTransactionService.normalizeCart( cart );
        this._cart = cart;
    }

    get cart(): any {
        return this._cart;
    }

    getShippingAddressAndId(addressList : any){
        let address, addressId;
        if (addressList.length && addressList[1] && addressList[1].useSameAddress){
            this.checkout.address = addressList[0].data;
            return addressList[0].response;
        } 
        this.checkout.address = addressList[1].data;
        return addressList[1].response;
    }

    onSaveGuestAddress(event : any) {
        let addressId = this.getShippingAddressAndId(event);
        this.checkoutTransactionService.prepareOrderWithShipping(this.checkout, this.cart.grandTotal, addressId)
        .then(response =>  this.checkout.step++ )
		.catch((error: HttpErrorResponse) => {
			this.errorTime = this._parseErrorMsg(error, 'Could not save address');
		});
    }

    next() {
        if ( this.checkout.step == 1 ) {
			if(this.cart) {
				this.errorTime = '';
		        this.checkoutTransactionService.prepareOrderWithAddressAndShipping( this.checkout, this.cart.grandTotal )
		            .then( response => this.checkout.step++ )
					.catch((error: HttpErrorResponse) => {
						this.errorTime = this._parseErrorMsg(error, 'Could not continue');
					});
			} else {
				this.errorTime = 'Could not continue, as the cart has been lost. Please go back to the cart and click continue to checkout.';
			}
        }
        else {
			this.errorTime = '';
			alert('Checkout complete');
            /*this.checkoutTransactionService.submitOrder()
                .then( response => this.checkout.step++ )
				.catch((error: HttpErrorResponse) => {
					this.errorTime = this._parseErrorMsg(error, 'Could not checkout');
				});*/
        }
    }

    back() {
        if ( this.canBack() ) {
            this.checkout.step--;
			this.errorTime = '';
        }
    }

    canBack(): boolean {
        return this.checkout.step > 1;
    }

	private _parseErrorMsg(error: HttpErrorResponse, fallback: string): string {
		const eBody = error.error;
		return eBody.errors && eBody.errors.length && eBody.errors[0].errorMessage ? eBody.errors[0].errorMessage : fallback;
	}
}
