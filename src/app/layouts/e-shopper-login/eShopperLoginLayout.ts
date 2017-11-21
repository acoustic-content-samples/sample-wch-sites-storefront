import {
	LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
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
  templateUrl: './eShopperLoginLayout.html',
  styleUrls: ['./eShopperLoginLayout.scss']
})
export class EShopperLoginLayoutComponent extends TypeEShopperLoginComponent implements OnInit {

	@Input() useForCheckout : boolean = false;

	user: any = {};
	returnUrl: string;

	loginLoading: boolean = false;
	registerLoading: boolean = false;

	loginErrorMsg: string = '';
	registerErrorMsg: string = '';

	constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationTransactionService) {
		super();
	}

	ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login() {
		this.loginLoading = true;

		this.authService.login(this.user.username1, this.user.password1).then(res => {
			// navigate to the given return URL (or home) after a successful login
			this.router.navigate([this.returnUrl]);
		}).catch((error: HttpErrorResponse) => {
			this.loginErrorMsg = this._parseErrorMsg(error, 'Could not log in');
			this.loginLoading = false;
		});
	}

	register() {
		this.registerLoading = true;

		this.authService.register(this.user.username2, this.user.password2, this.user.confirmPassword).then(res => {
			// navigate home after a successful register
			this.router.navigate([this.returnUrl]);
		}).catch((error: HttpErrorResponse) => {
			this.registerErrorMsg = this._parseErrorMsg(error, 'Could not register new user');
			this.registerLoading = false;
		});
	}

	private _parseErrorMsg(error: HttpErrorResponse, fallback: string): string {
		const eBody = error.error;
		return eBody.errors && eBody.errors.length && eBody.errors[0].errorMessage ? eBody.errors[0].errorMessage : fallback;
	}
}
