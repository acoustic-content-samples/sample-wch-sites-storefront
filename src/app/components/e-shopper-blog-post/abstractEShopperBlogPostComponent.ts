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
 * @name E-Shopper blog post
 * @id 8f3b9172-8227-46b3-be14-f10c196c9134
 */
export abstract class AbstractEShopperBlogPostComponent extends AbstractRenderingComponent {

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
     *   "key": "author",
     *   "label": "Author"
     * }
     */
    @RenderingContextBinding('text.author', '')
    readonly onAuthor: Observable<string>;

    /*
     * @see #onAuthor
     */
    @RenderingContextBinding()
    readonly author: string;

    /*
     * {
     *   "elementType": "datetime",
     *   "key": "dateAndTime",
     *   "label": "Date and time"
     * }
     */
    @RenderingContextBinding('datetime.dateAndTime')
    readonly onDateAndTime: Observable<Date>;

    /*
     * @see #onDateAndTime
     */
    @RenderingContextBinding()
    readonly dateAndTime: Date;

    /*
     * {
     *   "elementType": "number",
     *   "fieldType": "integer",
     *   "key": "rating",
     *   "label": "Rating",
     *   "maximum": 5,
     *   "minimum": 0
     * }
     */
    @RenderingContextBinding('number.rating', 0)
    readonly onRating: Observable<number>;

    /*
     * @see #onRating
     */
    @RenderingContextBinding()
    readonly rating: number;

    /*
     * {
     *   "elementType": "image",
     *   "key": "image",
     *   "label": "Image",
     *   "required": true
     * }
     */
    @RenderingContextBinding('image.image')
    readonly onImage: Observable<Image>;

    /*
     * @see #onImage
     */
    @RenderingContextBinding()
    readonly image: Image;

    /*
     * {
     *   "elementType": "formattedtext",
     *   "key": "text",
     *   "label": "Text",
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtext.text')
    readonly onText: Observable<string>;

    /*
     * @see #onText
     */
    @RenderingContextBinding()
    readonly text: string;

    protected constructor() {
        super();
    }
}
