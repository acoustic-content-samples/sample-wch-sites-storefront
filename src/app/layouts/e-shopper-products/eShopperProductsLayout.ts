import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Observer } from "rxjs/Observer";
import 'rxjs/Observer';
import { ISubscription } from 'rxjs/Subscription';
import { TypeEShopperProductsComponent } from './../../components/e-shopper-products/typeEShopperProductsComponent';
import { CommerceService } from '../../commerce/services/commerce.service';
import {ProductFilter} from "../../commerce/util/ProductFilter";
import {FilterService} from "../../commerce/util/FilterService";

/*
 * @name eShopperProductsLayout
 * @id e-shopper-products-layout
 */
@LayoutComponent({
    selector: 'e-shopper-products-layout'
})
@Component({
  selector: 'app-e-shopper-products-layout-component',
  templateUrl: './eShopperProductsLayout.html',
  styleUrls: ['./eShopperProductsLayout.scss']
})
export class EShopperProductsLayoutComponent extends TypeEShopperProductsComponent implements OnInit, AfterViewInit, OnDestroy {
	allItems: any[];
	filteredItems: any[];
	searchSub: ISubscription;
	catSub: ISubscription;
	globalParams: Params;
	productID: string;

    constructor(private commerceService: CommerceService,
				private route: ActivatedRoute,
                private filterService: FilterService,
                private change: ChangeDetectorRef) {
        super();
    }

	ngAfterViewInit(): void {
    }

	ngOnInit() {
        this.allItems = this.filteredItems = [];
		// categories are route parameters
		/*
		this.catSub = this.route.params.subscribe(params => {

			let path = [];
			if(params['category']) {
				path.push(params['category']);
			}
			if(params['subCategory']) {
				path.push(params['subCategory']);
			}
			if(params['id']) {
				path.push(params['id']);
			}
			if(path.length) {
				//console.log('productList getItems on %o', path);
				this.commerceService.getItems(path).then((cat: any) => {
                        this.setItems(cat, null);
				});
			}
		});
		*/

		// search terms are query parameters
		this.searchSub = this.route.queryParams.subscribe(params => {
			this.productID = null;
			if (params['search']) {
				this.commerceService.searchForProduct(params['search']).subscribe((cat: any) => {
					    this.setItems(cat, params);
				});
			} else if (params['id']){
				this.productID = params['id'];
			} else if (params['path']) {
				const path = params['path'].split('/');
				if (params['category']) {
					path.push(params['category']);
				}
				if (params['subCategory']) {
					path.push(params['subCategory']);
				}
				if (params['id']) {
					path.push(params['id']);
				}
				if (path.length) {
					// console.log('productList getItems on %o', path);
					this.commerceService.getItems(path).then((cat: any) => {
						this.setItems(cat, params);
					});
				}
			} else {
				this.globalParams = params;
				this.setItems(this.allItems, params);
			}
		});

	}

	private setItems(fromServer: any[], params: Params){
        if (!params) {
            params = this.globalParams;
        }
        this.allItems = fromServer;
console.warn('params %o',params);
	    if (params) {
            this.filteredItems = this.filterService.checkForFiltering(params, fromServer);
            this.change.detectChanges();
        } else {
            this.filteredItems = this.allItems;
        }

    }

	ngOnDestroy(){
	    //this.catSub.unsubscribe();
	    this.searchSub.unsubscribe();
    }
}
