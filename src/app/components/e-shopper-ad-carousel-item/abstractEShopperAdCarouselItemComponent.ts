/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    Image,
    Link,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name E-Shopper ad carousel item
 * @id 54b1ff0e-d7a2-4476-bda3-e8c8d400db09
 */
export abstract class AbstractEShopperAdCarouselItemComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "title",
     *   "label": "Title",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.title')
    readonly onTitle: Observable<string>;

    /*
     * @see #onTitle
     */
    @RenderingContextBinding()
    readonly title: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "caption",
     *   "label": "Caption"
     * }
     */
    @RenderingContextBinding('text.caption', '')
    readonly onCaption: Observable<string>;

    /*
     * @see #onCaption
     */
    @RenderingContextBinding()
    readonly caption: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "description",
     *   "label": "Description"
     * }
     */
    @RenderingContextBinding('text.description', '')
    readonly onDescription: Observable<string>;

    /*
     * @see #onDescription
     */
    @RenderingContextBinding()
    readonly description: string;

    /*
     * {
     *   "elementType": "link",
     *   "key": "getItNowLink",
     *   "label": "Get it now link"
     * }
     */
    @RenderingContextBinding('link.getItNowLink')
    readonly onGetItNowLink: Observable<Link>;

    /*
     * @see #onGetItNowLink
     */
    @RenderingContextBinding()
    readonly getItNowLink: Link;

    /*
     * {
     *   "elementType": "image",
     *   "key": "adImage",
     *   "label": "Ad image",
     *   "required": true
     * }
     */
    @RenderingContextBinding('image.adImage')
    readonly onAdImage: Observable<Image>;

    /*
     * @see #onAdImage
     */
    @RenderingContextBinding()
    readonly adImage: Image;

    /*
     * {
     *   "elementType": "image",
     *   "key": "sticker",
     *   "label": "Sticker"
     * }
     */
    @RenderingContextBinding('image.sticker')
    readonly onSticker: Observable<Image>;

    /*
     * @see #onSticker
     */
    @RenderingContextBinding()
    readonly sticker: Image;

    protected constructor() {
        super();
    }
}
