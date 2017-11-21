/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    RenderingContext,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name E-Shopper blog page
 * @id a469fb98-65c3-4538-8d03-ce345be7be81
 */
export abstract class AbstractEShopperBlogPageComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "reference",
     *   "helpText": "Add a dynamic list of posts here.",
     *   "key": "blogList",
     *   "label": "Blog list",
     *   "required": true
     * }
     */
    @RenderingContextBinding('reference.blogList')
    readonly onBlogList: Observable<RenderingContext>;

    /*
     * @see #onBlogList
     */
    @RenderingContextBinding()
    readonly blogList: RenderingContext;

    protected constructor() {
        super();
    }
}
