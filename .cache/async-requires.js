// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-check-js": () => import("../src/pages/check.js" /* webpackChunkName: "component---src-pages-check-js" */),
  "component---src-pages-confirmation-js": () => import("../src/pages/confirmation.js" /* webpackChunkName: "component---src-pages-confirmation-js" */),
  "component---src-pages-error-js": () => import("../src/pages/error.js" /* webpackChunkName: "component---src-pages-error-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

