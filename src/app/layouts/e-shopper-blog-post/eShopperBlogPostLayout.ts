import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component, Injectable } from '@angular/core';
import { TypeEShopperBlogPostComponent } from './../../components/e-shopper-blog-post/typeEShopperBlogPostComponent';

/*
 * @name eShopperBlogPostLayout
 * @id e-shopper-blog-post-layout
 */
@LayoutComponent({
    selector: 'e-shopper-blog-post-layout'
})
@Component({
  selector: 'app-e-shopper-blog-post-layout-component',
  templateUrl: './eShopperBlogPostLayout.html',
  styleUrls: ['./eShopperBlogPostLayout.scss']
})
export class EShopperBlogPostLayoutComponent extends TypeEShopperBlogPostComponent {

    constructor() {
        super();
    }
}
