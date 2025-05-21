Package.describe({
  name    : "reidmatthew:autoform-selectize",
  summary : "Custom 'selectize' input type for AutoForm",
  version : "2.3.4",
  git     : "https://github.com/reidmatthew/meteor-autoform-selectize.git"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@3.2.2");

  api.use("templating@1.4.4");
  api.use("blaze@3.0.2");
  api.use("aldeed:autoform@8.0.0");
  api.use("underscore@1.6.4");

  api.addFiles([
    "autoform-selectize.html",
    "autoform-selectize.js",
    "autoform-selectize-input.html",
    "autoform-selectize-input.js",
    "themes/bootstrap3.css",
  ], "client");
});
