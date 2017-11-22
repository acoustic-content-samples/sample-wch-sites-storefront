import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component, OnInit } from '@angular/core';
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
                this._cart = response.body;
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
        this._checkout = checkout;
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
            this._checkout.address = addressList[0].data;
            return addressList[0].response;
        } 
        this._checkout.address = addressList[1].data;
        return addressList[1].response;
    }

    onSaveGuestAddress(event : any) {
        let addressId = this.getShippingAddressAndId(event);
        this.checkoutTransactionService.prepareOrderWithShipping(this._checkout, this._cart.grandTotal, addressId)
        .then(response =>  this._checkout.step++ );
    }

    next() {
        if ( this._checkout.step == 1 ) {
            this.checkoutTransactionService.prepareOrderWithAddressAndShipping( this._checkout, this._cart.grandTotal )
                .then( response => this._checkout.step++ );
        }
        else {
            this.checkoutTransactionService.submitOrder()
                .then( response => this._checkout.step++ );
        }
    }

    back() {
        if ( this.canBack() ) {
            this._checkout.step--;
        }
    }

    canBack(): boolean {
        return this._checkout.step > 1;
    }

}
