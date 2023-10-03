const isProd = process.argv[2] === 'prod';
const devPath = 'http://localhost:4000';

const manifestData = {
  name: 'Zendesk Test Apps',
  version: '1.0',
  frameworkVersion: '2.0',
  author: {
    name: 'Ashwin Shenoy',
    email: 'ashwinkshenoy@gmail.com',
    url: 'https://support.zendesk.com',
  },
  defaultLocale: 'en',
  private: true,
  location: {
    support: {
      ticket_sidebar: isProd ? 'assets/index.html' : devPath,
    },
  },
  parameters: [
    {
      name: 'IS_PRODUCTION',
      type: 'hidden',
      default: isProd ? 'true' : 'false',
    },
  ],
};

module.exports = manifestData;
