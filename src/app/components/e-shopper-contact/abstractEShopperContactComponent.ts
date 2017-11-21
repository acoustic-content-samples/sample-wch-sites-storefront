/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    Link,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/*
 * @name E-Shopper contact
 * @id bb6e9a2b-1a87-41b7-a6d0-8d2037554c3e
 */
export abstract class AbstractEShopperContactComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "name",
     *   "label": "Name",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.name')
    readonly onName: Observable<string>;

    /*
     * @see #onName
     */
    @RenderingContextBinding()
    readonly name: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "address",
     *   "label": "Address",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.address')
    readonly onAddress: Observable<string>;

    /*
     * @see #onAddress
     */
    @RenderingContextBinding()
    readonly address: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "phone",
     *   "label": "Phone",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.phone')
    readonly onPhone: Observable<string>;

    /*
     * @see #onPhone
     */
    @RenderingContextBinding()
    readonly phone: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "fax",
     *   "label": "Fax"
     * }
     */
    @RenderingContextBinding('text.fax', '')
    readonly onFax: Observable<string>;

    /*
     * @see #onFax
     */
    @RenderingContextBinding()
    readonly fax: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "email",
     *   "label": "Email",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.email')
    readonly onEmail: Observable<string>;

    /*
     * @see #onEmail
     */
    @RenderingContextBinding()
    readonly email: string;

    /*
     * {
     *   "elementType": "link",
     *   "key": "facebook",
     *   "label": "Facebook"
     * }
     */
    @RenderingContextBinding('link.facebook')
    readonly onFacebook: Observable<Link>;

    /*
     * @see #onFacebook
     */
    @RenderingContextBinding()
    readonly facebook: Link;

    /*
     * {
     *   "elementType": "link",
     *   "key": "twitter",
     *   "label": "Twitter"
     * }
     */
    @RenderingContextBinding('link.twitter')
    readonly onTwitter: Observable<Link>;

    /*
     * @see #onTwitter
     */
    @RenderingContextBinding()
    readonly twitter: Link;

    /*
     * {
     *   "elementType": "link",
     *   "key": "googlePlus",
     *   "label": "Google plus"
     * }
     */
    @RenderingContextBinding('link.googlePlus')
    readonly onGooglePlus: Observable<Link>;

    /*
     * @see #onGooglePlus
     */
    @RenderingContextBinding()
    readonly googlePlus: Link;

    /*
     * {
     *   "elementType": "link",
     *   "key": "youtube",
     *   "label": "YouTube"
     * }
     */
    @RenderingContextBinding('link.youtube')
    readonly onYoutube: Observable<Link>;

    /*
     * @see #onYoutube
     */
    @RenderingContextBinding()
    readonly youtube: Link;

    protected constructor() {
        super();
    }
}
