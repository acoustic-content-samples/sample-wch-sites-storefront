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
 * @name E-Shopper ad
 * @id 23c92986-b470-47f5-b3af-1e4c4770abdc
 */
export abstract class AbstractEShopperAdComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "image",
     *   "key": "ad",
     *   "label": "Ad",
     *   "required": true
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
