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
 * @name E-Shopper video link
 * @id 76afdb21-c226-44f9-b110-ee011cf66ecb
 */
export abstract class AbstractEShopperVideoLinkComponent extends AbstractRenderingComponent {

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
     *   "elementType": "datetime",
     *   "key": "date",
     *   "label": "Date",
     *   "required": true
     * }
     */
    @RenderingContextBinding('datetime.date')
    readonly onDate: Observable<Date>;

    /*
     * @see #onDate
     */
    @RenderingContextBinding()
    readonly date: Date;

    /*
     * {
     *   "elementType": "image",
     *   "key": "thumbnail",
     *   "label": "Thumbnail",
     *   "required": true
     * }
     */
    @RenderingContextBinding('image.thumbnail')
    readonly onThumbnail: Observable<Image>;

    /*
     * @see #onThumbnail
     */
    @RenderingContextBinding()
    readonly thumbnail: Image;

    /*
     * {
     *   "elementType": "link",
     *   "key": "link",
     *   "label": "Link",
     *   "required": true
     * }
     */
    @RenderingContextBinding('link.link')
    readonly onLink: Observable<Link>;

    /*
     * @see #onLink
     */
    @RenderingContextBinding()
    readonly link: Link;

    protected constructor() {
        super();
    }
}
