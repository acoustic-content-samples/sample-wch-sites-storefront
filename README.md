# sample-wch-sites-storefront
An E-Shopper storefront sample which uses WCH sites.

Preparation
------
The deployment step of this repository pushes the Single Page Application (SPA) files into the WCH tenant, overlaying existing files. It will overlay any existing files in the web asset folder. We recommend to first do a pull with wchtools in case you want to keep artifacts that you still need. If you use the Sites SPA, it will get overlayed.

To use
------
1. Install dependencies with `npm install`
2. Add your WCH and Commerce configuration:
	A. In `src/app/commerce/dxconfig/serverConfig.json`, replace each empty string with a string containing the correct value for the according key for your environment:
		* `can be found in Homepange of WCH-> Profile Tab with username-> Hub information -> Content hub ID` "contentHubID": "YOUR WATSON CONTENT HUB ID", 
		* `--can be found in Homepange of WCH-> Profile Tab with username-> Hub information -> Domain name` "contentHubDomainName": "YOUR WCH DOMAIN NAME",
		* `put your backend commerce server domain name - i.e. commerceserver.ibm.com` "commerceSearchDomainName": "commerceserver.ibm.com", 
		* `put your backend commerce server ssl port - i.e. 443` "commerceSearchSecurePort":"443",
		* `put your backend commerce server context root for search - i.e. /search/resources` "commerceSearchContextPath":"/search/resources",
		* `put your transaction commerce server domain name - i.e. commerceserver.ibm.com` "commerceTransactionDomainName": "commerceserver.ibm.com", 
		* `put your transaction commerce server SSL port - i.e. 443` "commerceTransactionSecurePort": "443",
		* `put your transaction commerce server context root - i.e. /wcs/resources` "commerceTransactionContextPath":"/wcs/resources",
		* `put your transaction commerce server store ID - i.e. 1` "commerceStoreID": "1",
		* `put your transaction commerce server catalog ID - i.e. 10502` "commerceCatalogID": "10502"
3. Run `wchtools init` to setup the [WCH tools CLI](https://github.com/ibm-wch/wchtools-cli#getting-started)
4. (**optional**) Run `wchtools delete -A --all -v` to empty your tenant if you want a fresh start. **WARNING**: _This will delete all your tenant's Content, Assets, Types, Layouts, Pages, Taxonomies and Image Profiles._ Read more [here](https://github.com/ibm-wch/wchtools-cli#deleting-all-instances-of-a-specified-artifact-type-or-all-instances-of-all-artifact-types)
5. Add the site artifacts with  `npm run init-content`
6. Set your tenant information in `src/app/Constants.ts`, then run a local development server with `npm start`
7. Customize your site, read more [here](https://developer.ibm.com/customer-engagement/docs/wch/developing-your-own-website/)
8. Build with `npm run build`
9. Deploy Angular app, SPA or layout changes to WCH with `npm run deploy`
