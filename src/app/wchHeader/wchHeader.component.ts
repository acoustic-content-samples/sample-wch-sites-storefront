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
import {
	Component,
	Input,
	OnDestroy,
	ViewEncapsulation
} from '@angular/core';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {LayoutComponent, RenderingContext, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {ConfigServiceService} from "../common/configService/config-service.service";
import {Constants} from "../Constants";
import {Subscription} from "rxjs/Subscription";

@Component({
	selector: 'wch-header',
	templateUrl: './wch-header.html',
	encapsulation: ViewEncapsulation.None
})
export class WchHeaderComponent implements OnDestroy {

	rc: RenderingContext;
	headerConfig: any;
	configSub: Subscription;
	public readonly LOGO: string = 'websiteLogo';
	public readonly PHONE: string = 'phoneNumber';
	public readonly EMAIL: string = 'emailAddress';
	public readonly FACEBOOK: string = 'facebookLink';
	public readonly TWITTER: string = 'twitterLink';
	public readonly INSTAGRAM: string = 'instagramLink';
	public readonly LINKEDIN: string = 'linkedinLink';
	public readonly DRIBBBLE: string = 'dribbbleLink';
	public readonly GPLUS: string = 'googlePlusLink';
	public readonly LINKS: string = 'topLinks';

	@Input()
	public set renderingContext(aValue: RenderingContext) {
		this.rc = aValue;
	}

	constructor(configService: ConfigServiceService) {
		this.configSub = configService.getConfig(Constants.HEADER_CONFIG).subscribe((context) => {
			this.headerConfig = context;
		});
	}

	ngOnDestroy() {
		this.configSub.unsubscribe();
	}

	isElementAvailable(elem): boolean {
		return (this.rc && this.headerConfig && this.headerConfig.elements && this.headerConfig.elements[elem]);
	}

	getElement(elem) { console.log('element "%o" => %o',elem,this.headerConfig.elements[elem]);
		return this.headerConfig.elements[elem];
	}

	getImgURL(img) { console.log('img "%o" => %o and %o',img,this.headerConfig.elements[img],this.headerConfig.elements[img].renditions.default.url);
		return this.rc.context.hub.deliveryUrl['origin'] + this.headerConfig.elements[img].renditions.default.url;
	}

	isSelected(page: any) {
		return this.rc.id === page.contentId;
	}

	getRouteURL(url){
		return decodeURI(url);
	}
}
