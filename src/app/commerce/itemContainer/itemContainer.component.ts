/*
 * Copyright IBM Corp. 2017
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
import { Component, Input, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
	selector: 'item-container',
	styleUrls: ['itemContainer.scss'],
	templateUrl: 'itemContainer.html'
})
export class ItemContainerComponent implements OnInit{
    @Input() item: any;

    constructor(private router: Router) {}

    ngOnInit() {}

    goToProduct(item) {
		if (item.price) {
			// return item.url.length ? '/shop/product/' + item.url[item.url.length - 1] : '/shop/products';
			if (item.url.length) {
				const productId = item.url.pop();
				const params: NavigationExtras = {
					queryParams: {'id': productId,
					'path': item.url.join('/')}
				};
				this.router.navigate([`/shop/products`], params);
			} else {
				this.router.navigate([`/shop/products`]);
			}
		} else {
			const params: NavigationExtras = {
				queryParams: {'path': item.url.join('/')}
			};
			this.router.navigate([`/shop/products`], params);
		}


	}


}
