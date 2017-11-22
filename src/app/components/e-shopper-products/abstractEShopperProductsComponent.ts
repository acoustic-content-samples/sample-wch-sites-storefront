/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    Image,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name E-Shopper products
 * @id c77e86a9-926a-4c7b-99c9-dd41b8547ade
 */
export abstract class AbstractEShopperProductsComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "image",
     *   "key": "ad",
     *   "label": "Ad"
     * }
     */
    @RenderingContextBinding('image.ad')
    readonly onAd: Observable<Image>;

    /*
     * @see #onAd
     */
    @RenderingContextBinding()
    readonly ad: Image;

    protected constructor() {
        super();
    }
}
