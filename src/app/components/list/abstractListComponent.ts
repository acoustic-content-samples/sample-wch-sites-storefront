/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    Link,
    RenderingContext,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name List
 * @id 1ff37269-4ab1-417e-ad88-e85a39c8b5ea
 */
export abstract class AbstractListComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "heading",
     *   "label": "List title"
     * }
     */
    @RenderingContextBinding('text.heading', '')
    readonly onHeading: Observable<string>;

    /*
     * @see #onHeading
     */
    @RenderingContextBinding()
    readonly heading: string;

    /*
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "List item",
     *   "key": "items",
     *   "label": "List items",
     *   "minimumValues": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('references.items')
    readonly onItems: Observable<RenderingContext[]>;

    /*
     * @see #onItems
     */
    @RenderingContextBinding()
    readonly items: RenderingContext[];

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
