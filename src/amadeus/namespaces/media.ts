import Files from './media/files';

/**
 * A namespaced client for the
 * `/v2/media` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.media;
 * ```
 *
 * @param {Client} client
 * @property {Files} files
 */
class Media {
  client: any;
  files: any;
  constructor(client: any) {
    this.client = client;
    this.files = new Files(client);
  }
}

export default Media;
