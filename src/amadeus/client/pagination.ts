/**
 * A helper library for handling pagination.
 *
 * @param {Client} client the client to make the API calls against
 * @protected
 */
class Pagination {
  client: any;
  constructor(client: any) {
    this.client = client;
  }

  /**
   * Fetch the page for the given page name, and make the next API call based on
   * the previous request made.
   *
   * @param  {type} pageName the name of the page to fetch, should be available
   *    as a link in the meta links in the response
   * @param  {type} response the response containing the links to the next pages,
   *   and the request used to make the previous call
   * @return {Promise.<Response,ResponseError>} a Bluebird Promise
   * @protected
   */
  page(pageName: any, response: any) {
    let pageNumber = this.pageNumber(response, pageName);

    if (pageNumber) {
      return this.call(response.request, pageNumber);
    } else {
      return this.nullPromise();
    }
  }

  // PRIVATE


  /**
   * Makes a new call for the new page number
   *
   * @param  {type} request    the request used to make the previous call
   * @param  {type} pageNumber the page number to fetch
   * @return {Promise.<Response,ResponseError>} a Bluebird Promise
   * @private
   */
  call(request: any, pageNumber: any) {
    let params = request.params || {};
    params['page'] = params['page'] || {};
    params['page']['offset'] = pageNumber;

    return this.client.request(
      request.verb,
      request.path,
      params
    );
  }

  /**
   * Tries to determine the page number from the page name. If not present, it
   * just returns null
   *
   * @param  {type} response the response containing the links to the next pages
   * @param  {type} pageName the name of the page to fetch
   * @return {number}
   * @private
   */
  pageNumber(response: any, pageName: any) {
    try {
      return response.result['meta']['links'][pageName].split('=').pop();
    } catch (TypeError) {
      return null;
    }
  }

  /**
   * Returns a Promise that always resolves to null
   *
   * @return {Promise} a Promise that always resolves to null
   * @private
   */
  nullPromise() {
    // @ts-expect-error ts-migrate(2585) FIXME: 'Promise' only refers to a type, but is being used... Remove this comment to see the full error message
    return new Promise(function(resolve: any) { resolve(null); });
  }
}

export default Pagination;
