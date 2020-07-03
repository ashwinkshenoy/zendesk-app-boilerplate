import ZAFClient from 'zendesk_app_framework_sdk';

let CLIENT = null;
let APP_CONTEXT = null;
let APP_SETTINGS = null;

const ZDClient = {
  events: {
    ON_APP_REGISTERED(cb) {
      return CLIENT.on('app.registered', async data => {
        APP_CONTEXT = data.context;
        APP_SETTINGS = data.metadata.settings;
        return cb(data);
      });
    }
  },

  init() {
    CLIENT = ZAFClient.init();
  },

  getClient() {
    return CLIENT;
  },

  /**
   * Set getters for private objects
   */
  app: {
    get settings() {
      return APP_SETTINGS;
    },
    get context() {
      return APP_CONTEXT;
    },

    /**
     * It returns true if the app is installed in the instance, false if
     * it's running locally
     */
    get isProduction() {
      return !!this.settings['IS_PRODUCTION'];
    }
  },

  /**
   * Calls ZAF Client.request()
   * @returns {Promise}
   */
  async request(url, data, options = {}) {
    return await CLIENT.request({
      url,
      data,
      secure: APP_SETTINGS['IS_PRODUCTION'],
      contentType: 'application/json',
      ...options
    });
  },

  /**
   * Calls ZAF Client.get()
   * @param {String} getter
   */
  async get(getter) {
    return await CLIENT.get(getter);
  },

  /**
   * It sets the frame height using on the passed value.
   * If no value has been passed, 80 will be set as default heigth.
   * @param {Int} newHeight
   */
  resizeFrame(appHeight) {
    CLIENT.invoke('resize', { width: '100%', height: `${appHeight}px` });
  }
};

export default ZDClient;
