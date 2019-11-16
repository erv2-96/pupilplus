const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/var/www/html/pupilplus/.cache/dev-404-page.js"))),
  "component---src-pages-check-js": hot(preferDefault(require("/var/www/html/pupilplus/src/pages/check.js"))),
  "component---src-pages-error-js": hot(preferDefault(require("/var/www/html/pupilplus/src/pages/error.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/var/www/html/pupilplus/src/pages/index.js"))),
  "component---src-pages-confirmation-js": hot(preferDefault(require("/var/www/html/pupilplus/src/pages/confirmation.js")))
}

