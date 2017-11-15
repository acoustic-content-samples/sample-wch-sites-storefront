/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    Category,
    Link,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name Dynamic list
 * @id 6bac578b-daac-4f16-8776-cecf79d61b70
 */
export abstract class AbstractDynamicListComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "listTitle",
     *   "label": "List title"
     * }
     */
    @RenderingContextBinding('text.listTitle', '')
    readonly onListTitle: Observable<string>;

    /*
     * @see #onListTitle
     */
    @RenderingContextBinding()
    readonly listTitle: string;

    /*
     * {
     *   "elementType": "category",
     *   "key": "contentType",
     *   "label": "Content to include",
     *   "required": true,
     *   "restrictedParents": [
     *     "828fad8e-e5a6-49a4-81c0-dc5986f5ce67"
     *   ]
     * }
     */
    @RenderingContextBinding('category.contentType')
    readonly onContentType: Observable<Category>;

    /*
     * @see #onContentType
     */
    @RenderingContextBinding()
    readonly contentType: Category;

    /*
     * {
     *   "elementType": "category",
     *   "key": "datesToInclude",
     *   "label": "Dates to include",
     *   "restrictedParents": [
     *     "a646e96d-5a82-4626-9e49-a871391e0b33"
     *   ]
     * }
     */
    @RenderingContextBinding('category.datesToInclude')
    readonly onDatesToInclude: Observable<Category>;

    /*
     * @see #onDatesToInclude
     */
    @RenderingContextBinding()
    readonly datesToInclude: Category;

    /*
     * {
     *   "elementType": "category",
     *   "key": "sortOrder",
     *   "label": "List order",
     *   "restrictedParents": [
     *     "7e16c19c-0108-4556-8f3f-c13af4bad34c"
     *   ]
     * }
     */
    @RenderingContextBinding('category.sortOrder')
    readonly onSortOrder: Observable<Category>;

    /*
     * @see #onSortOrder
     */
    @RenderingContextBinding()
    readonly sortOrder: Category;

    /*
     * {
     *   "elementType": "number",
     *   "fieldType": "integer",
     *   "key": "maxItem",
     *   "label": "Maximum number of list items"
     * }
     */
    @RenderingContextBinding('number.maxItem', 0)
    readonly onMaxItem: Observable<number>;

    /*
     * @see #onMaxItem
     */
    @RenderingContextBinding()
    readonly maxItem: number;

    /*
     * {
     *   "elementType": "link",
     *   "key": "viewAllLink",
     *   "label": "View all link"
     * }
     */
    @RenderingContextBinding('link.viewAllLink')
    readonly onViewAllLink: Observable<Link>;

    /*
     * @see #onViewAllLink
     */
    @RenderingContextBinding()
    readonly viewAllLink: Link;

    protected constructor() {
        super();
    }
}
