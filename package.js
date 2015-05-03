Package.describe({
  name: 'lufeng:encryptor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Provide popular encrypt method',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/keith3/encryptor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('encryptor.js', 'server');
  api.export('Encryptor', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lufeng:encryptor');
  api.addFiles('encryptor-tests.js');
});

Npm.depends({
  'pbkdf2-sha256': '1.1.0'
})
