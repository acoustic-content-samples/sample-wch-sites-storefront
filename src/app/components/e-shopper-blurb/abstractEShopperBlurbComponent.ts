/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name E-Shopper blurb
 * @id 9bd965ca-0e14-44fc-89a4-ad7ff080c9ab
 */
export abstract class AbstractEShopperBlurbComponent extends AbstractRenderingComponent {

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
     *   "elementType": "formattedtext",
     *   "key": "blurb",
     *   "label": "Blurb",
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtext.blurb')
    readonly onBlurb: Observable<string>;

    /*
     * @see #onBlurb
     */
    @RenderingContextBinding()
    readonly blurb: string;

    protected constructor() {
        super();
    }
}
