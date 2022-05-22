const resource = [

  /* --- CSS --- */
  '/blog/assets/css/style.css',

  /* --- PWA --- */
  '/blog/app.js',
  '/blog/sw.js',

  /* --- HTML --- */
  '/blog/index.html',
  '/blog/404.html',
  
    '/blog/categories/',
  
    '/blog/tags/',
  
    '/blog/archives/',
  
    '/blog/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/blog/assets/js/dist/categories.min.js',
    '/blog/assets/js/dist/commons.min.js',
    '/blog/assets/js/dist/home.min.js',
    '/blog/assets/js/dist/misc.min.js',
    '/blog/assets/js/dist/page.min.js',
    '/blog/assets/js/dist/post.min.js',
    '/blog/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

