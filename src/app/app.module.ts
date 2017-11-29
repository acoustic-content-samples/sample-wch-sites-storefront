/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import { LAYOUTS } from './layouts';
import { SAMPLE_MODULE } from './sample.module';
import {NgModule, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from "@angular/common/http";
import { Logger, Options as LoggerOptions } from "angular2-logger/core";
import { RouterModule, Routes } from '@angular/router';

import { Ng2LoggerFactory } from './common/Ng2LoggerFactory';

import 'script-loader!foundation-sites/dist/js/foundation.js';

import { WchNgModule, PageComponent, SiteBootstrap, Site, WchLoggerFactory } from 'ibm-wch-sdk-ng';
import { LoggerOptions as AppLoggerOptions } from "./commerce/logger.options";

import { WchHeaderComponent} from './wchHeader/wchHeader.component';
import { WchFooterComponent } from './wchFooter/wchFooter.component';
import { EShopperProductsLayoutComponent } from './layouts/e-shopper-products/eShopperProductsLayout';
import { ProductDetailsComponent } from './layouts/e-shopper-products/productDetails/productDetails.component';
import { BundleComponentsComponent } from './layouts/e-shopper-products/productDetails/bundleComponents.component';
import { ReviewsModule } from './layouts/e-shopper-products/productDetails/reviews/reviews.module';
import { AppComponent } from './app.component';
import { environment } from './environment/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiteCommonModule } from './common/site.common.module';
import { HighlightService } from './common/highlightService/highlight.service';
import { CommerceModule } from './commerce/commerce.module';
import { ConfigService } from './commerce/config.service';
import { StorefrontUtils } from './commerce/storefrontUtils.service';
import { AuthenticationTransactionService } from "./commerce/services/componentTransaction/authentication.transaction.service";
import { StarRatingComponent } from './commerce/starRating/starRating.component';

import { GenericLayoutModule } from './components/generic/generic.layout.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const pageRoutes: Routes = [
	// { path: 'shop/products/:id', component: EShopperProductsLayoutComponent },
	// { path: 'shop/products/:category/:id', component: EShopperProductsLayoutComponent },
	// { path: 'shop/products/:category/:subCategory/:id', component: EShopperProductsLayoutComponent },
	// { path: 'shop/product/:id', component: ProductDetailsComponent },
	{ path: '', redirectTo: '/eshopper', pathMatch: 'full' },
	{ path: '**', component: PageComponent }
];

export function HttpLoaderFactory(http: Http) {
	return new TranslateHttpLoader(http, './oob-spa/locales/', '.json');
}

@NgModule({
	imports: [
		RouterModule.forRoot(pageRoutes),
		BrowserModule,
		FormsModule,
		HttpModule,
		HttpClientModule,
		WchNgModule.forRoot(environment),
		SiteCommonModule,
		GenericLayoutModule,
		SAMPLE_MODULE,
		CommerceModule,
		ReviewsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ Http ]
			}
		})
	],
	declarations: [
		AppComponent,
		WchHeaderComponent,
		WchFooterComponent,
		ProductDetailsComponent,
		BundleComponentsComponent,
		PageNotFoundComponent,
		StarRatingComponent,
		...LAYOUTS
	],
	providers: [
		ConfigService,
		{
			provide: WchLoggerFactory,
			useClass: Ng2LoggerFactory
		},
		AppLoggerOptions,
		{
			provide: LoggerOptions,
			useClass: AppLoggerOptions
		},
        Logger,
		AuthenticationTransactionService,
		HighlightService,
        StorefrontUtils
	],
	entryComponents: [
		PageNotFoundComponent
	, ...LAYOUTS
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

