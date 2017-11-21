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
import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {RenderingContext} from "ibm-wch-sdk-ng";
import {ConfigServiceService} from "../common/configService/config-service.service";
import {Constants} from "../Constants";
import {Subscription} from "rxjs/Subscription";

@Component({
	selector: 'wch-footer',
	templateUrl: './wch-footer.html',
})

export class WchFooterComponent implements OnDestroy {

	rc: RenderingContext;
	footerConfig: any;
	configSub: Subscription;
	public readonly COPYRIGHT: string = 'copyright';
	public readonly ADDRESS: string = 'address';
	public readonly SITE_TITLE: string = 'siteTitle';
	public readonly SITE_DESCRIPTION: string = 'siteDescription';
	public readonly BG_IMAGE: string = 'background';
	public readonly VIDEO_LINKS: string = 'videoLinks';
	public readonly SERVICE_LINKS: string = 'serviceLinks';
	public readonly QUICK_LINKS: string = 'quickLinks';
	public readonly POLICY_LINKS: string = 'policyLinks';
	public readonly ABOUT_LINKS: string = 'aboutLinks';
	currentYear: number = new Date().getFullYear();

	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
	}

	constructor(configService: ConfigServiceService) {
		this.configSub = configService.getConfig(Constants.FOOTER_CONFIG).subscribe((context) => {
			this.footerConfig = context;
		});
	}

	ngOnDestroy(){
		this.configSub.unsubscribe();
	}

	isElementAvailable(elem): boolean {
		return (this.rc && this.footerConfig && this.footerConfig.elements && this.footerConfig.elements[elem]);
	}

	getElement(elem) {
		return this.footerConfig ? this.footerConfig.elements[elem] : '';
	}

	getImgURL(img) {
		return this.rc.context.hub.deliveryUrl['origin'] + this.footerConfig.elements[img].renditions.default.url;
	}
}
