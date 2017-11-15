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
import {NgModule, ViewEncapsulation} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { Ng2LoggerFactory } from './common/Ng2LoggerFactory';

import 'script-loader!foundation-sites/dist/js/foundation.js';

import {WchNgModule, PageComponent, SiteBootstrap, Site, WchLoggerFactory} from 'ibm-wch-sdk-ng';


import {WchHeaderComponent} from './wchHeader/wchHeader.component';
import {WchFooterComponent} from './wchFooter/wchFooter.component';
import {AppComponent} from './app.component';
import {environment} from './environment/environment';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { SiteCommonModule } from './common/site.common.module';
import { HighlightService } from './common/highlightService/highlight.service';

import { GenericLayoutModule } from './components/generic/generic.layout.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const pageRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: '**', component: PageComponent}
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
		WchNgModule.forRoot(environment),
		SiteCommonModule,
		GenericLayoutModule,
		SAMPLE_MODULE,
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
		PageNotFoundComponent,
		...LAYOUTS
	],
	providers: [
		{provide: WchLoggerFactory, useClass: Ng2LoggerFactory},
		 HighlightService
	],
	entryComponents: [
		PageNotFoundComponent
	, ...LAYOUTS
	],
	bootstrap: [AppComponent]
})
export class AppModule {

	// cleue: add some fallback content
/*	@SiteBootstrap()
	static defaultSite: Site = {
		id: 'default',
		pages: [{
			contentId: '908a3f7e-3c09-40d0-98a9-d30984f7f5ef',
			id: '41781ed4-2cc6-4320-b52a-aeb6a66f8f62',
			route: '/Home',
			decodedRoute: '/Home',
			name: 'Name',
			children: []
		}]
	}; */
}

