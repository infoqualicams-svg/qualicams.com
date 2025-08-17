const { onRequest } = require('firebase-functions/v2/https');
const next = require('next');
const path = require('path');
const { parse } = require('url');

const isDev = process.env.NODE_ENV !== 'production';
const nextjsServer = next({ 
  dev: isDev, 
  conf: { 
    distDir: '.next',
  },
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = onRequest(
  {
    region: 'us-central1',
    memory: '512MiB',
    timeoutSeconds: 60,
    maxInstances: 10,
  },
  async (req, res) => {
    const parsedUrl = parse(req.url, true);
    
    // Handle Next.js static files
    if (parsedUrl.pathname.startsWith('/_next/static/')) {
      // Let Firebase Hosting handle static files
      res.status(404).end();
      return;
    }
    
    return nextjsServer.prepare().then(() => nextjsHandle(req, res));
  }
);