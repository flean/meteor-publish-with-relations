Package.describe({
  name: "flean:publish-with-relations",
  summary: "Publish associated collections at once.",
  version: "0.2.0",
  git: "https://github.com/flean/meteor-publish-with-relations.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('coffeescript@2.0.3_4', 'server');
  api.add_files('publish_with_relations.coffee', 'server');
});