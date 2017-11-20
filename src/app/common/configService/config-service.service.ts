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
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Constants} from '../../Constants';
import {Http} from "@angular/http";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class ConfigServiceService {

	//cache config results
	public config: Map<string, any> = new Map();


	constructor(private http: Http) {

	}

	getConfig(name: string): Observable<any> {
		if (this.config.has(name)) {
			return Observable.of(this.config.get(name));
		}

		let possibleTenant = window.location.pathname.split('/')[1],
			baseUrl = possibleTenant.search(/\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}/) === 0 ? '/' + possibleTenant : '',
			apiUrl = (window.location.hostname==="localhost") ? Constants.apiUrl : `${window.location.protocol}//${window.location.hostname}/api${baseUrl}`;

		if (name === Constants.HEADER_CONFIG) {
			const headerId = '70894f76-3180-4591-a116-588692f01127';
			return this.http.get(`${apiUrl}/delivery/v1/content/${headerId}`)
				.map(res => res.json()).do(res => this.config.set(name, res))
				.publishReplay(1)
				.refCount();
		}

		if (name === Constants.FOOTER_CONFIG) {
			const footerId = 'e8a56863-efb8-416e-8c13-6de8025de066';
			return this.http.get(`${apiUrl}/delivery/v1/content/${footerId}`)
				.map(res => res.json()).do(res => this.config.set(name, res))
				.publishReplay(1)
				.refCount();
		}

		let searchURL = `${apiUrl}/delivery/v1/search?q=name:%22${name}%22&fl=document:%5Bjson%5D`;
		return this.http.get(searchURL)
			.map((response) => {
				let res = response.json();
				if(res && res.numFound > 0) {
					return response.json().documents.shift().document
				} else {
					return {};
				}
			})
			.do((res) => {
				this.config.set(name, res);
			})
			.publishReplay(1)
	}

}
